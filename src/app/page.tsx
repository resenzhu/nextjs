import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)] sm:h-[calc(100vh-3.5rem)]'>
    <div className='flex h-full flex-col items-center'>
      <div className='relative h-1/5 w-full'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-profile-background.webp")] bg-cover bg-top bg-no-repeat brightness-50 contrast-125'></div>
        <div className='absolute h-full w-full bg-cyan-500 opacity-20'></div>
        <div className='relative flex h-full translate-y-1/2 items-center justify-center'>
          <img
            className='rounded-full border-8 contrast-125'
            src='/images/main/home-profile-avatar-original.webp'
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className='relative flex h-full w-full flex-col items-center pt-20'>
        <div className='text-2xl font-extrabold tracking-wide text-gray-600'>
          RESEN
        </div>
        <div className='text-md font-extrabold text-cyan-600'>
          FULL STACK DEVELOPER
        </div>
      </div>
    </div>
  </section>
);

export {metadata};
export default Page;
