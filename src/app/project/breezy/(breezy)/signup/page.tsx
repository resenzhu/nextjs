'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Recaptcha from 'react-google-recaptcha';
import {createMetadata} from '@utils/metadata';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Sign up for Breezy and discover a new level of simplicity in messaging and staying connected.',
  url: '/project/breezy/signup'
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
        <div className='relative space-y-9'>
          <div className='mx-4 space-y-4'>
            <div className='text-4xl font-semibold text-white'>Sign Up</div>
            <div className='tracking-wide text-gray-400'>
              Join Breezy and start connecting with others in no time.
            </div>
          </div>
          <div className='max-h-[calc(73vh-4rem)] bg-white'>
            <form className='mx-4 flex flex-col space-y-3 py-6'>
              <input
                className='rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
                type='text'
                placeholder='Username'
              />
              <input
                className='rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
                type='text'
                placeholder='Display Name'
              />
              <div className='flex'>
                <input
                  className='flex-1 rounded-l-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
                  type='password'
                  placeholder='Password'
                />
                <FontAwesomeIcon
                  className='rounded-r-lg bg-purple-500 p-4 text-xl text-white'
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
                className='rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 hover:bg-purple-600 disabled:bg-gray-300'
                type='submit'
              >
                Sign Up
              </button>
              <div className='break-words rounded-lg bg-red-500 px-3 py-2 text-center text-white'>
                Username is already taken.
              </div>
            </form>
            <div className='mx-4 pb-4 text-center'>
              Already have an account?{' '}
              <Link
                className='font-bold text-purple-500 hover:underline hover:underline-offset-4'
                href='/project/breezy/login'
              >
                Login here!
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
