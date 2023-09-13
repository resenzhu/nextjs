import type {ReactNode} from 'react';

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
    <div className='relative flex h-screen flex-col justify-between md:mx-auto md:w-2/3 md:items-center md:justify-center'>
      <div className='mx-4 py-5 text-center font-semibold text-gray-100 md:mx-0 md:pb-4 md:pt-0 md:text-sm'>
        {welcome}
      </div>
      <div className='space-y-9 md:space-y-6'>
        <div className='mx-4 space-y-4 md:mx-0 md:space-y-1 md:text-center'>
          <div className='text-4xl font-semibold text-white md:text-2xl'>
            {title}
          </div>
          <div className='tracking-wide text-gray-400 md:mx-auto md:w-3/4 md:text-xs'>
            {subtitle}
          </div>
        </div>
        <div className='bg-white md:rounded-lg'>{children}</div>
      </div>
    </div>
  </>
);

export type {AuthProps};
export default Auth;
