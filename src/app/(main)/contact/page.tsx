import {Footer, Header} from '@components/main/shared';
import {Form} from '@components/main/contact';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Contact | Resen',
  description:
    'Interested in my work? Use this contact page to reach out and learn more about my portfolio. I am here to answer your queries.',
  url: '/contact'
});

const Page = (): JSX.Element => (
  <>
    <section>
      <Header
        title='contact'
        subtitle='Explore Your Options by Getting in Touch'
        description='Contact me to explore partnership opportunities or simply to drop a friendly message. Feel free to reach out via the contact form or connect with me on social media for updates and insights into my work.'
      />
    </section>
    <section className='h-full min-h-[40vh]'>
      <Form
        title='STAY CONNECTED'
        description="I'd love to hear from you! Whether you have a question, feedback, or just want to chat, feel free to reach out using the contact form below. Let's stay connected!"
        label={{
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'SUBMIT'
        }}
      />
    </section>
    <section className='h-full min-h-[12rem] pt-20'>
      <Footer />
    </section>
  </>
);

export {metadata};
export default Page;
