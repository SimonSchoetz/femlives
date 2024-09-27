import { submitEmailSignUp } from '@/actions/form-submits';
import { zEmailAddressDto } from '@/api/db/validators';
import FormWrapper from '@/components/FormWrapper';

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl'>Femlives</h1>
      <FormWrapper
        onSubmit={submitEmailSignUp}
        schema={zEmailAddressDto}
        submitButtonLabel='SignUp'
      />
    </main>
  );
}
