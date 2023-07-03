import {Jumbotron} from '@components/main/shared';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Portfolio | Resen',
  description:
    'Explore my diverse collection of projects showcasing my creativity, skills, and passion for web development.',
  url: '/portfolio'
});

const Page = (): JSX.Element => (
  <section>
    <Jumbotron
      title='portfolio'
      subtitle='A Showcase of Innovative Projects and Personal Endeavors'
      description='Discover a captivating collection of my projects, where innovation meets design. Immerse yourself in an inspiring showcase of creativity and explore the limitless possibilities of my work.'
    />
  </section>
);

export {metadata};
export default Page;
