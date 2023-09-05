'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Recaptcha from 'react-google-recaptcha';
import {createMetadata} from '@utils/metadata';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Login to Breezy and start chatting with friends and loved ones in a breeze. Stay connected anytime, anywhere.',
  url: '/project/breezy/login'
});

const Page = (): JSX.Element => (
  <>
    <div className='absolute h-full w-full bg-[url("/images/project/breezy/login-background.webp")] bg-cover bg-center bg-no-repeat'></div>
    <div className='absolute h-full w-full bg-black opacity-60'></div>
    <div>
      <div className='fixed top-0 w-full py-5 text-center font-semibold text-gray-100'>
        Welcome to Breezy
      </div>
      <div className='fixed bottom-0 w-full'>
        <div className='relative space-y-8'>
          <div className='mx-4 space-y-4 text-white'>
            <div className='text-4xl font-semibold'>Login</div>
            <div className='tracking-wide text-gray-400'>
              Instantly access your account and start chatting in seconds.
            </div>
          </div>
          <div className='max-h-[calc(70vh-4rem)] bg-white'>
            <form className='mx-4 flex flex-col space-y-3 py-6'>
              <input
                className='border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
                type='text'
                placeholder='Username'
              />
              <div className='flex'>
                <input
                  className='flex-1 border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
                  type='password'
                  placeholder='Password'
                />
                <FontAwesomeIcon
                  className='bg-purple-500 p-4 text-xl text-white'
                  icon={faEye}
                />
              </div>
              <Recaptcha
                className='place-self-center'
                sitekey={
                  process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX
                }
              />
              <button
                className='bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 hover:bg-purple-600 disabled:bg-gray-300'
                type='submit'
              >
                Login
              </button>
              <div className='break-words bg-red-500 px-3 py-2 text-center text-white'>
                Username is already taken.
              </div>
            </form>
            <div className='mx-4 pb-4 text-center'>
              Don&#39;t have an account?{' '}
              <Link
                className='font-bold text-purple-500 hover:underline hover:underline-offset-4'
                href='/project/breezy/signup'
              >
                Sign up here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export {metadata};
export default Page;
