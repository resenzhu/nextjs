import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/login';
import Link from 'next/link';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Login to Breezy and start chatting with friends and loved ones in a breeze. Stay connected anytime, anywhere.',
  url: '/project/breezy/login'
});

const Page = (): JSX.Element => (
  <Auth
    background='bg-[url("/images/project/breezy/login-background.webp")]'
    welcome='Welcome to Breezy'
    title='Login'
    subtitle='Instantly access your account and start chatting in seconds.'
    footer={
      <div className='mx-4 pb-4 text-center'>
        Don&#39;t have an account?{' '}
        <Link
          className='font-bold text-purple-500 hover:underline hover:underline-offset-4'
          href='/project/breezy/signup'
        >
          Sign up here!
        </Link>
      </div>
    }
  >
    <Form label={{username: 'Username', password: 'Password', submit: 'Login'}} />
  </Auth>
);

export {metadata};
export default Page;
