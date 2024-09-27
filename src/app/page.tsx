import { submitEmailSignUp } from '@/actions/form-submits';
import { ValidatorName } from '@/api/db/validators/util';
import FormWrapper from '@/components/FormWrapper';

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl'>Femlives</h1>
      <FormWrapper
        onSubmit={submitEmailSignUp}
        validatorName={ValidatorName.EMAIL_ADDRESS}
        submitButtonLabel='SignUp'
      />
    </main>
  );
}
