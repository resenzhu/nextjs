import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/login';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Login to Breezy and start chatting with friends and loved ones in a breeze. Stay connected anytime, anywhere.',
  url: '/project/breezy/login'
});

const Page = (): JSX.Element => (
  <Auth
    welcome='Welcome to Breezy'
    title='Login'
    subtitle='Instantly access your account and start chatting in seconds.'
  >
    <Form
      label={{username: 'Username', password: 'Password', submit: 'Login'}}
      signup={{description: "Don't have an account?", label: 'Sign up here!', url: '/project/breezy/signup'}}
    />
  </Auth>
);

export {metadata};
export default Page;
