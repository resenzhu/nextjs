import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => <section>HELLO WORLD!</section>;

export {metadata};
export default Page;
