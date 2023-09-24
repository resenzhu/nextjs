import {Footer, Header} from '@components/main/shared';
import {Showcase} from '@components/main/portfolio';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Portfolio | Resen',
  description:
    'Explore my diverse collection of projects showcasing my creativity, skills, and passion for web development.',
  url: '/portfolio'
});

const Page = (): JSX.Element => (
  <>
    <section>
      <Header
        title='portfolio'
        subtitle='A Showcase of Innovative Projects and Personal Endeavors'
        description='Discover a captivating collection of my projects, where innovation meets design. Immerse yourself in an inspiring showcase of creativity and explore the limitless possibilities of my work.'
      />
    </section>
    <section className='h-full min-h-[40vh]'>
      <Showcase
        title='PROJECTS'
        projects={[
          {
            name: 'Breezy',
            description:
              'Effortless communication is just a tap away with Breezy. Designed to simplify your conversations, Breezy offers a clean and intuitive platform where you can effortlessly chat with friends and build meaningful connections. Enjoy the freedom of breezy conversations that let you focus on what truly matters.',
            url: '/project/breezy'
          }
        ]}
      />
    </section>
    <section className='h-full min-h-[12rem] pt-20'>
      <Footer />
    </section>
  </>
);

export {metadata};
export default Page;
