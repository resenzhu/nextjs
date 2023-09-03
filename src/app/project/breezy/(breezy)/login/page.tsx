import {createMetadata} from '@utils/metadata';

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
            <div className='text-5xl font-semibold'>Login</div>
            <div className='tracking-wide text-gray-400'>
              Instantly access your account and start chatting in seconds.
            </div>
          </div>
          <div className='bg-white'>
            <form className='mx-4 flex flex-col'>
              <input
                type='text'
                placeholder='Username'
              />
              <input
                type='password'
                placeholder='Password'
              />
              <button type='submit'>Login</button>
              <div>Don&#39;t have an account? Sign up here!</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);

export {metadata};
export default Page;
