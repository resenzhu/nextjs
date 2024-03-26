import Input from '@components/project/breezy/login/form/input';
import {Link} from '@navigation';
import {useTranslations} from 'next-intl';

type FormProps = {
  signup: {
    description: string;
    label: string;
    url: string;
  };
};

const Form = ({signup}: FormProps): JSX.Element => {
  const translate = useTranslations('project.breezy');
  return (
    <>
      <Input
        placeholder={{
          userName: translate('login.auth.form.placeholder.userName'),
          password: translate('login.auth.form.placeholder.password')
        }}
        label={{submit: translate('login.auth.form.label.submit')}}
        error={{
          offline: translate('login.auth.form.error.offline'),
          throttle: translate('login.auth.form.error.throttle'),
          input: {
            userName: {
              empty: translate('login.auth.form.error.input.userName.empty'),
              tooShort: translate(
                'login.auth.form.error.input.userName.tooShort'
              ),
              tooLong: translate(
                'login.auth.form.error.input.userName.tooLong'
              ),
              invalid: translate('login.auth.form.error.input.userName.invalid')
            },
            password: {
              empty: translate('login.auth.form.error.input.password.empty'),
              tooShort: translate(
                'login.auth.form.error.input.password.tooShort'
              ),
              tooLong: translate('login.auth.form.error.input.password.tooLong')
            },
            honeypot: translate('login.auth.form.error.input.honeypot'),
            recaptcha: translate('login.auth.form.error.input.recaptcha')
          },
          client: translate('login.auth.form.error.client'),
          server: translate('login.auth.form.error.server'),
          invalid: translate('login.auth.form.error.invalid')
        }}
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
};

export type {FormProps};
export default Form;
