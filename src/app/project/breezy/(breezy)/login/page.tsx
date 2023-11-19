import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/login';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Login to Breezy and start chatting with friends and loved ones in a breeze. Stay connected anytime, anywhere.',
  url: '/project/breezy/login'
});

const Page = (): JSX.Element => (
  <Auth
    welcome='Welcome to Breezy'
    title='Login'
    subtitle='Instantly access your account and start chatting in seconds.'
  >
    <Form
      label={{username: 'Username', password: 'Password', submit: 'Login'}}
      message={{
        error: {
          offline:
            'You are currently offline. Please check your internet connection and try again later.',
          throttle:
            'You are submitting too quickly. Please take a moment and try again.',
          input: {
            username: {
              empty: 'Please enter your username.',
              tooShort:
                'Your username is too short. Please enter at least 2 characters.',
              tooLong:
                'Your username is too long. Please enter a maximum of 15 characters.',
              invalid:
                'Please enter a username containing only letters, numbers, hyphen, and underscore.',
              taken:
                'The username you entered is already taken. Please choose a different username.'
            },
            password: {
              empty: 'Please enter your password.',
              tooShort:
                'Your password is too short. Please enter at least 8 characters.',
              tooLong:
                'Your password is too long. Please enter a maximum of 64 characters.'
            },
            honeypot:
              'Bot detection system triggered. Please ensure you are a human and not a bot.',
            recaptcha: 'Please complete the reCAPTCHA verification.'
          },
          client:
            'Oops! There was an error with your login. Please review your information and try again.',
          server:
            'Apologies, there was an unexpected error during the login process. Please retry your login later.',
          invalid: 'Invalid username or password.'
        }
      }}
      signup={{
        description: "Don't have an account?",
        label: 'Sign up here!',
        url: '/project/breezy/signup'
      }}
    />
  </Auth>
);

export {metadata};
export default Page;
