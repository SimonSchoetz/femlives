import AppLink from './AppLink';
import { Route } from '@/enums';

const Footer = () => {
  return (
    <div className='flex gap-10 h-56 justify-center items-center'>
      <AppLink label={'Terms of Service'} internalRoute={Route.GTC} />
      <AppLink label={'Imprint'} internalRoute={Route.IMPRINT} />
    </div>
  );
};

export default Footer;
