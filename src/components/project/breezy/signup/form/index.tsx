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
      <Input
        placeholder={{
          userName: translate('signup.auth.form.placeholder.userName'),
          displayName: translate('signup.auth.form.placeholder.displayName'),
          password: translate('signup.auth.form.placeholder.password')
        }}
        label={{submit: translate('signup.auth.form.label.submit')}}
        error={{
          offline: translate('signup.auth.form.error.offline'),
          throttle: translate('signup.auth.form.error.throttle'),
          input: {
            userName: {
              empty: translate('signup.auth.form.error.input.userName.empty'),
              tooShort: translate(
                'signup.auth.form.error.input.userName.tooShort'
              ),
              tooLong: translate(
                'signup.auth.form.error.input.userName.tooLong'
              ),
              invalid: translate(
                'signup.auth.form.error.input.userName.invalid'
              ),
              taken: translate('signup.auth.form.error.input.userName.taken')
            },
            displayName: {
              empty: translate(
                'signup.auth.form.error.input.displayName.empty'
              ),
              tooShort: translate(
                'signup.auth.form.error.input.displayName.tooShort'
              ),
              tooLong: translate(
                'signup.auth.form.error.input.displayName.tooLong'
              ),
              invalid: translate(
                'signup.auth.form.error.input.displayName.invalid'
              )
            },
            password: {
              empty: translate('signup.auth.form.error.input.password.empty'),
              tooShort: translate(
                'signup.auth.form.error.input.password.tooShort'
              ),
              tooLong: translate(
                'signup.auth.form.error.input.password.tooLong'
              )
            },
            honeypot: translate('signup.auth.form.error.input.honeypot'),
            recaptcha: translate('signup.auth.form.error.input.recaptcha')
          },
          client: translate('signup.auth.form.error.client'),
          server: translate('signup.auth.form.error.server')
        }}
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
};

export type {FormProps};
export default Form;
