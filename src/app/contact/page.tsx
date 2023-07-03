import {Jumbotron} from '@components/main/shared';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Contact | Resen',
  description: '',
  url: '/contact'
});

const Page = (): JSX.Element => (
  <section>
    <Jumbotron
      title='contact'
      subtitle='Explore Your Options by Getting in Touch'
      description='Contact me to explore partnership opportunities or simply to drop a friendly message. Feel free to reach out via the contact form or connect with me on social media for updates and insights into my work.'
    />
  </section>
);

export {metadata};
export default Page;
