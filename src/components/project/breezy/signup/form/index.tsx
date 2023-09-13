import Input from '@components/project/breezy/signup/form/input';
import Link from 'next/link';

type FormProps = {
  label: {
    username: string;
    displayName: string;
    password: string;
    submit: string;
  };
  login: {
    description: string;
    label: string;
    url: string;
  };
};

const Form = ({label, login}: FormProps): JSX.Element => (
  <>
    <Input
      label={{
        username: label.username,
        displayName: label.displayName,
        password: label.password,
        submit: label.submit
      }}
    />
    <div className='mx-4 pb-4 text-center'>
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
