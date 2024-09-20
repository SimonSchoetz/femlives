import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import ConditionWrapper from './ConditionWrapper';
import { FCProps } from '@/types/app';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; errorMsg?: string };

const Input: FCProps<InputProps> = ({ label, errorMsg, ...inputProps }) => {
  return (
    <div>
      <div className='flex flex-col'>
        <ConditionWrapper condition={!!label}>
          <label htmlFor='email' className='text-lg font-medium'>
            {label}
          </label>
        </ConditionWrapper>

        <input
          {...inputProps}
          className='p-2 border border-gray-300 rounded-md text-foreground bg-white 
                           focus:ring-2 focus:ring-fl-primary focus:outline-none 
                           transition-transform duration-200 ease-in-out 
                           hover:scale-105 hover:border-fl-primary'
        />
      </div>

      <ConditionWrapper condition={!!errorMsg}>
        <p className='text-red-500 text-sm'>{errorMsg}</p>
      </ConditionWrapper>
    </div>
  );
};

export default Input;
