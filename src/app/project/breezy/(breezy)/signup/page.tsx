import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/signup';
import Link from 'next/link';
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
    footer={
      <div className='mx-4 pb-4 text-center'>
        Already have an account?{' '}
        <Link
          className='font-bold text-purple-500 hover:underline hover:underline-offset-4'
          href='/project/breezy/signup'
        >
          Login here!
        </Link>
      </div>
    }
  >
    <Form
      label={{
        username: 'Username',
        displayName: 'Display Name',
        password: 'Password',
        submit: 'Login'
      }}
    />
  </Auth>
);

export {metadata};
export default Page;
