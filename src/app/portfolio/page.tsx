import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Portfolio | Resen',
  description:
    'Explore my diverse collection of projects showcasing my creativity, skills, and passion for web development.',
  url: '/portfolio'
});

const Page = (): JSX.Element => <>PORTFOLIO</>;

export {metadata};
export default Page;
