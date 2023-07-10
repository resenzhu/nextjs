import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'About | Resen',
  description:
    'Meet Resen, a passionate web developer showcasing skills, projects, and experiences in the dynamic field of web development.',
  url: '/about'
});

const Page = (): JSX.Element => <>ABOUT</>;

export {metadata};
export default Page;
