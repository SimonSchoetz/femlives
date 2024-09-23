import {
  zAppEmailAddressData,
  zDbEmailAddressData,
  zEmailAddressDto,
} from '@/api/db/validators';
import { z } from 'zod';

/**
 * should only be used in api
 */
export type EmailAddressDto = z.infer<typeof zEmailAddressDto>;

/**
 * should only be used in app
 */
export type EmailAddress = z.infer<typeof zAppEmailAddressData>;

/**
 * should only be used in db
 */
export type DbEmailAddress = z.infer<typeof zDbEmailAddressData>;
