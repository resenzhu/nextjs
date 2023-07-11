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
      <div className='absolute h-1/3 w-full'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-card-background.webp")] bg-cover bg-center bg-no-repeat brightness-50 contrast-125'></div>
        <div className='absolute h-full w-full bg-blue-500 opacity-20'></div>
        <div className='relative flex h-full items-center justify-center'>
          <img
            className='rounded-full border-8 contrast-125'
            src='/images/main/home-card-avatar-original.webp'
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className='relative pt-56'>ABC</div>
    </div>
  </section>
);

export {metadata};
export default Page;
