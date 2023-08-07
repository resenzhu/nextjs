import {Header} from '@components/main/shared';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resources | Resen',
  description:
    'Discover a range of downloadable guides, tutorials, and other enriching resources for your benefit.',
  url: '/resources'
});

const Page = (): JSX.Element => (
  <section>
    <Header
      title='resources'
      subtitle='Your Gateway to Endless Inspiration and Learning'
      description='Explore a world of knowledge with my extensive collection of downloadable resources. From guides to tutorials, my carefully curated selection covers various interests and disciplines, empowering your learning journey.'
    />
  </section>
);

export {metadata};
export default Page;
