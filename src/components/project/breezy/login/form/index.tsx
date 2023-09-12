import Input from '@components/project/breezy/login/form/input';
import Link from 'next/link';

type FormProps = {
  label: {
    username: string;
    password: string;
    submit: string;
  };
  signup: {
    description: string;
    label: string;
    url: string;
  }
};

const Form = ({label, signup}: FormProps): JSX.Element => (
  <>
    <Input />
    <div className='mx-4 pb-4 text-center'>
      {signup.description}
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
