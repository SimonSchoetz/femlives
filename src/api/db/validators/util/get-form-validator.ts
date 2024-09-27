import { z } from 'zod';
import { zEmailAddressDto } from '../email-address';

export enum ValidatorName {
  EMAIL_ADDRESS = 'emailAddress',
}

export const getFormValidator = (key: ValidatorName) => {
  const map: Record<ValidatorName, z.ZodTypeAny> = {
    [ValidatorName.EMAIL_ADDRESS]: zEmailAddressDto,
  };
  if (!map[key]) {
    throw new Error(`validator ${key} not found`);
  }

  return map[key];
};
