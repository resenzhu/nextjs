import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)] sm:h-[calc(100vh-3.5rem)]'>
    <div className='absolute h-[calc(100vh-4rem)] w-full bg-[url("/images/main/shared-jumbotron.webp")] bg-cover bg-center bg-no-repeat brightness-50 contrast-125 sm:h-[calc(100vh-3.5rem)]'></div>
    <div className='absolute h-[calc(100vh-4rem)] w-full bg-gray-700 opacity-70 sm:h-[calc(100vh-3.5rem)]'></div>
    <div className='relative mx-4 flex h-full justify-center items-center sm:mx-12 md:mx-16 lg:mx-20 flex-col sm:flex-row'>
      <div>LANDINGPAGE</div>
      <div>EXPLORE</div>
      <div>HELLO</div>
    </div>
  </section>
);

export {metadata};
export default Page;
