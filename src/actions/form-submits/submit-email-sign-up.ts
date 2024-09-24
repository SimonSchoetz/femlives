import { createEmailAddress } from '@/api/db/email-addresses';
import { zAppEmailAddressData } from '@/api/db/validators';
import { sendEmailSignUpVerificationEmail } from '../email';

export const submitEmailSignUp = async (data: unknown): Promise<void> => {
  const { email } = zAppEmailAddressData.parse(data);
  try {
    await createEmailAddress(email);
    await sendEmailSignUpVerificationEmail(email);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
};
