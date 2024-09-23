import { FCProps } from '@/types/app';
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Section,
} from '@react-email/components';

type Props = {
  name?: string;
};
//Todo: https://femlives.atlassian.net/jira/software/projects/FL/boards/1/backlog?epics=visible&selectedIssue=FL-45
const EmailSignUpVerificationTemplate: FCProps<Props> = ({ name }) => {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <title>Thanks for signing up{name ? `, ${name}` : ''}!</title>
        <Heading>Thanks for signing up{name ? `, ${name}` : ''}!</Heading>
      </Head>
      <Body>
        <Container>
          <Section>
            You have sucessfully signed up for Femlives and we will let you know
            as soon as we go live!
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailSignUpVerificationTemplate;
