import Input from '@components/project/breezy/signup/form/input';
import {Link} from '@navigation';
import {useTranslations} from 'next-intl';

type FormProps = {
  login: {
    description: string;
    label: string;
    url: string;
  };
};

const Form = ({login}: FormProps): JSX.Element => {
  const translate = useTranslations('project.breezy');
  return (
    <>
      <Input />
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
};

export type {FormProps};
export default Form;
