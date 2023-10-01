import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';

type AuthProps = {
  welcome: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

const Auth = ({welcome, title, subtitle, children}: AuthProps): JSX.Element => (
  <>
    <div className='absolute h-full w-full bg-[url("/images/project/breezy/login-background.webp")] bg-cover bg-center bg-no-repeat'></div>
    <div className='absolute h-full w-full bg-black opacity-60'></div>
    <Link
      className='absolute z-10 m-4 animate-shake animate-duration-700 md:m-5'
      href={process.env.NEXT_PUBLIC_APP_URL}
    >
      <button
        className='text-white'
        type='button'
      >
        <FontAwesomeIcon
          className='text-3xl'
          icon={faCircleArrowLeft}
        />
      </button>
    </Link>
    <div className='md:max-w-1/5 relative flex h-screen flex-col justify-between md:mx-auto md:w-1/5 md:items-center md:justify-center'>
      <div className='mx-4 animate-fade-down py-5 text-center font-semibold text-gray-100 animate-duration-700 md:mx-0 md:pb-4 md:pt-0 md:text-sm'>
        {welcome}
      </div>
      <div className='space-y-9 md:space-y-6'>
        <div className='mx-4 space-y-4 md:mx-0 md:space-y-1 md:text-center'>
          <div className='animate-fade-right text-4xl font-semibold text-white animate-duration-700 md:text-2xl'>
            {title}
          </div>
          <div className='animate-fade-right tracking-wide text-gray-400 animate-duration-700 md:mx-auto md:w-3/4 md:text-xs'>
            {subtitle}
          </div>
        </div>
        <div className='animate-fade-up bg-white animate-duration-700 md:rounded-lg'>
          {children}
        </div>
      </div>
    </div>
  </>
);

export type {AuthProps};
export default Auth;
