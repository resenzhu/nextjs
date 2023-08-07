import {Header} from '@components/main/shared';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'About | Resen',
  description:
    'Meet Resen, a passionate web developer showcasing skills, projects, and experiences in the dynamic field of web development.',
  url: '/about'
});

const Page = (): JSX.Element => (
  <>
    <section>
      <Header
        title='about'
        subtitle='Unveiling the Mind and Vision Behind the Website'
        description='Step behind the curtain and delve into the mind of a digital enthusiast, as I divulge the story of my adventures in design and development.'
      />
    </section>
    <section className='h-[calc(100vh-4rem)] md:h-[calc(100vh-3.5rem)]'>
      <div className='flex flex-col items-center'>
        <div className='text-xl font-extrabold text-cyan-600'>ABOUT ME</div>
        <div className='flex-1'>Description</div>
      </div>
    </section>
  </>
);

export {metadata};
export default Page;
