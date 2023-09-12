import type {ReactNode} from 'react';

type AuthProps = {
  background: string;
  welcome: string;
  title: string;
  subtitle: string;
  footer: ReactNode;
  children: ReactNode;
};

const Auth = ({
  background,
  welcome,
  title,
  subtitle,
  footer,
  children
}: AuthProps): JSX.Element => (
  <>
    <div
      className={`absolute h-full w-full ${background} bg-cover bg-center bg-no-repeat`}
    ></div>
    <div className='absolute h-full w-full bg-black opacity-60'></div>
    <div className='relative flex h-screen flex-col justify-between'>
      <div className='mx-4 py-5 text-center font-semibold text-gray-100'>
        {welcome}
      </div>
      <div className='space-y-9'>
        <div className='mx-4 space-y-4'>
          <div className='text-4xl font-semibold text-white'>{title}</div>
          <div className='tracking-wide text-gray-400'>{subtitle}</div>
        </div>
        <div className='bg-white'>
          {children}
          {footer}
        </div>
      </div>
    </div>
  </>
);

export type {AuthProps};
export default Auth;
