import {Avatar, Specialty} from '@components/main/home';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)]'>
    <div className='absolute h-[calc(100vh-4rem)] w-full bg-[url("/main/home/jumbotron.webp")] bg-cover bg-center bg-no-repeat brightness-50 contrast-125'></div>
    <div className='relative mx-4 flex h-full justify-center'>
      <div className='flex flex-col items-center justify-center text-white'>
        <div className='pb-8'>
          <Avatar
            src='/main/home/avatar-original.webp'
            easter='/main/home/avatar-easter.webp'
          />
        </div>
        <div className='flex flex-col items-center pb-16'>
          <div className='font-semibold tracking-wide text-gray-200'>
            HELLO, I AM
          </div>
          <div className='text-3xl font-extrabold'>RESEN</div>
          <div className='font-semibold tracking-wide text-gray-200'>
            I AM A
          </div>
          <div className='text-xl font-bold text-yellow-300'>
            <Specialty
              titles={[
                'FULL STACK DEVELOPER',
                'FRONT END DEVELOPER',
                'BACK END DEVELOPER',
                'MIDDLEWARE DEVELOPER'
              ]}
            />
          </div>
        </div>
        <div className='flex w-36 flex-col space-y-3'>
          <button
            className='bg-blue-500 py-2 font-bold tracking-wider'
            type='button'
          >
            HELLO
          </button>
          <button
            className='border-2 border-white py-2 font-bold tracking-wider duration-150 hover:border-blue-500 hover:bg-blue-500'
            type='button'
          >
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  </section>
);

export {metadata};
export default Page;
