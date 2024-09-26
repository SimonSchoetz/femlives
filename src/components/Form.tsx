'use client';

import React, { ReactElement } from 'react';
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Path,
  FieldErrors,
} from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '../../node_modules/@hookform/resolvers/zod/src/';
import Button from './Button/Button';

interface InputProps {
  name: string;
  errorMsg?: string;
}

interface FormProps<T extends FieldValues> {
  onSubmit: (data: T) => Promise<{ [key in keyof T]?: string } | null>;
  schema: ZodSchema<T>;
  children: ReactElement<InputProps>[];
  submitButtonLabel: string;
}

const getErrorMessage = <T extends FieldValues>(
  errors: FieldErrors<T>,
  fieldName: Path<T>
): string | undefined => {
  return errors[fieldName]?.message as string | undefined;
};

const Form = <T extends FieldValues>({
  onSubmit,
  schema,
  children,
  submitButtonLabel,
}: FormProps<T>) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result) {
      (Object.keys(result) as Array<keyof T>).forEach((field) => {
        setError(field as Path<T>, {
          type: 'manual',
          message: result[field] as string,
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='space-y-4'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<InputProps>(child)) {
          const fieldName = child.props.name as Path<T>;

          return React.cloneElement(child, {
            ...child.props,
            ...register(fieldName),
            errorMsg: getErrorMessage(errors, fieldName),
          });
        }
        return child;
      })}
      <Button
        type='submit'
        buttonLabel={submitButtonLabel}
        loading={isSubmitting}
        disabled={isSubmitting} // Prevent multiple submissions
      />
    </form>
  );
};

export default Form;
