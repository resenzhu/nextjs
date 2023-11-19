import Input, {
  type Label,
  type Message
} from '@components/project/breezy/signup/form/input';
import Link from 'next/link';

type FormProps = {
  label: Label;
  message: Message;
  login: {
    description: string;
    label: string;
    url: string;
  };
};

const Form = ({label, message, login}: FormProps): JSX.Element => (
  <>
    <Input
      label={label}
      message={message}
    />
    <div className='mx-4 pb-4 text-center md:pb-5 md:text-xs'>
      {login.description}{' '}
      <Link
        className='font-bold text-purple-500 hover:underline hover:underline-offset-4'
        href={login.url}
      >
        {login.label}
      </Link>
    </div>
  </>
);

export type {FormProps};
export default Form;
