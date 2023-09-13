import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/signup';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Sign up for Breezy and discover a new level of simplicity in messaging and staying connected.',
  url: '/project/breezy/signup'
});

const Page = (): JSX.Element => (
  <Auth
    welcome='Welcome to Breezy'
    title='Sign Up'
    subtitle='Join Breezy and start connecting with others in no time.'
  >
    <Form
      label={{
        username: 'Username',
        displayName: 'Display Name',
        password: 'Password',
        submit: 'Sign Up'
      }}
      login={{
        description: 'Already have an account?',
        label: 'Login here!',
        url: '/project/breezy/login'
      }}
    />
  </Auth>
);

export {metadata};
export default Page;
