import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/signup';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Sign up for Breezy and discover a new level of simplicity in messaging and staying connected.',
  url: '/project/breezy/signup'
});

const Page = (): JSX.Element => (
  <Auth
    welcome='Welcome to Breezy'
    title='Sign Up'
    subtitle='Join Breezy and start connecting with others in no time.'
  >
    <Form
      label={{
        userName: 'Username',
        displayName: 'Display Name',
        password: 'Password',
        submit: 'Sign Up'
      }}
      message={{
        error: {
          offline:
            'You are currently offline. Please check your internet connection and try again later.',
          throttle:
            'You are submitting too quickly. Please take a moment and try again.',
          input: {
            userName: {
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
            displayName: {
              empty: 'Please enter your display name.',
              tooShort:
                'Your display name is too short. Please enter at least 2 characters.',
              tooLong:
                'Your display name is too long. Please enter a maximum of 25 characters.',
              invalid:
                'Please enter a valid display name using only letters and spaces.'
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
            'Oops! There was an error with your signup. Please review your information and try again.',
          server:
            'Apologies, there was an unexpected error during the signup process. Please retry your signup later.'
        }
      }}
      login={{
        description: 'Already have an account?',
        label: 'Login here!',
        url: '/project/breezy/login'
      }}
    />
  </Auth>
);

export {metadata};
export default Page;
