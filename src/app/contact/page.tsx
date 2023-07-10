import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Contact | Resen',
  description:
    'Interested in my work? Use this contact page to reach out and learn more about my portfolio. I am here to answer your queries.',
  url: '/contact'
});

const Page = (): JSX.Element => <>CONTACT</>;

export {metadata};
export default Page;
