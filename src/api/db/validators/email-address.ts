import { z } from 'zod';
import { zMapAppToDbData, zMapDbToAppData } from './util';

export const zEmailAddressDto = z.object({ email: z.string().min(1) });

export const zAppEmailAddressData = zMapDbToAppData(zEmailAddressDto);

export const zDbEmailAddressData = zMapAppToDbData(zEmailAddressDto);
