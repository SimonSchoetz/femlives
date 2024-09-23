import { EmailConfig, EmailResponse } from '@/types/api/email';
import { sendEmail } from './send-email';
import { EmailSender } from '@/enums';
import EmailSignUpVerificationTemplate from '@/components/emails/templates/email-sign-up-verification';

export const resendSendEmailSignUpVerificationEmail = async (
  userEmail: string,
  name?: string
): Promise<EmailResponse> => {
  return await sendEmail(getEmailConfig(userEmail, name));
};

const getEmailConfig = (email: string, name?: string): EmailConfig => {
  return {
    from: EmailSender.INFO,
    to: email,
    subject: 'Femlives - thanks for signing up!',
    template: EmailSignUpVerificationTemplate({ name }),
  };
};
