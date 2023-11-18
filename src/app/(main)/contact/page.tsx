import {Footer, Header, RecaptchaV3} from '@components/main/shared';
import {Form} from '@components/main/contact';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Contact | Resen',
  description:
    'Interested in my work? Use this contact page to reach out and learn more about my portfolio. I am here to answer your queries.',
  url: '/contact'
});

const Page = (): JSX.Element => (
  <RecaptchaV3 key={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V3}>
    <section>
      <Header
        title='contact'
        subtitle='Explore Your Options by Getting in Touch'
        description="Have a friendly message to share, feedback to provide, insights to offer, or want to stay updated? Feel free to reach out to me directly, and I'll be happy to provide the answers and support you're looking for."
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
        message={{
          error: {
            offline:
              'You are currently offline. Please check your internet connection and try again later.',
            throttle:
              'You are submitting too quickly. Please take a moment and try again.',
            input: {
              name: {
                empty: 'Please enter your name.',
                tooShort:
                  'Your name is too short. Please enter at least 2 characters.',
                tooLong:
                  'Your name is too long. Please enter a maximum of 120 characters.',
                invalid:
                  'Please enter a valid name using only letters and spaces.'
              },
              email: {
                empty: 'Please enter your email address.',
                tooShort:
                  'Your email is too short. Please enter at least 3 characters.',
                tooLong:
                  'Your email is too long. Please enter a maximum of 320 characters.',
                invalid: 'Please enter a valid email address.'
              },
              message: {
                empty: 'Please enter a message.',
                tooShort:
                  'Your message is too short. Please enter at least 15 characters.',
                tooLong:
                  'Your message is too long. Please enter a maximum of 2000 characters.'
              },
              honeypot:
                'Bot detection system triggered. Please ensure you are a human and not a bot.',
              recaptcha:
                'Apologies, the reCAPTCHA verification is not ready yet. Please wait a moment and try again.'
            },
            client:
              'Oops! There was an error processing your form submission. Please review your information and try again.',
            server:
              'Form submission failed due to a server error. We apologize for the inconvenience. Please try again later.',
            limit:
              'Oops! You have exceeded the maximum number of contact form submissions for today. Please try again tomorrow.'
          },
          success: 'Thank you! Your form has been successfully submitted.'
        }}
      />
    </section>
    <section className='h-full min-h-[12rem] pt-20'>
      <Footer />
    </section>
  </RecaptchaV3>
);

export {metadata};
export default Page;
