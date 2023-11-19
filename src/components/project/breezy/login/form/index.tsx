import Input, {
  type Label,
  type Message
} from '@components/project/breezy/login/form/input';
import Link from 'next/link';

type FormProps = {
  label: Label;
  message: Message;
  signup: {
    description: string;
    label: string;
    url: string;
  };
};

const Form = ({label, message, signup}: FormProps): JSX.Element => (
  <>
    <Input
      label={label}
      message={message}
    />
    <div className='mx-4 pb-4 text-center md:pb-5 md:text-xs'>
      {signup.description}{' '}
      <Link
        className='font-bold text-purple-500 hover:underline hover:underline-offset-4'
        href={signup.url}
      >
        {signup.label}
      </Link>
    </div>
  </>
);

export type {FormProps};
export default Form;
