import { convexDb, emailAddresses } from '@/api/db/convexDb';
import { EmailAddressDto } from '@/types/api/db';

export const createEmailAddress = async (email: string): Promise<void> => {
  const data = { email } satisfies EmailAddressDto;
  await convexDb.mutation(emailAddresses.createEmailAddress, data);
};
