import { composeUrl } from '@/util/app';
import AppLink from './AppLink';
import { Route } from '@/enums';

const Footer = () => {
  return (
    <div className='flex gap-10 h-56 justify-center items-center'>
      <AppLink title={'Terms of Service'} href={composeUrl(Route.GTC)} />
      <AppLink title={'Imprint'} href={composeUrl(Route.IMPRINT)} />
    </div>
  );
};

export default Footer;
