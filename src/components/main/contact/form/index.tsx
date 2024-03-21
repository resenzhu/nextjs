import Input from '@components/main/contact/form/input';
import {LazyLoad} from '@components/main/shared';
import {useTranslations} from 'next-intl';

type FormProps = {
  title: string;
  description: string;
};

const Form = ({title, description}: FormProps): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <div className='mx-4 flex flex-col items-center space-y-6 pt-8 md:mx-0'>
      <LazyLoad>
        <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
          {title}
        </div>
      </LazyLoad>
      <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
        <LazyLoad>
          <p className='animate-fade-left animate-duration-700'>
            {description}
          </p>
        </LazyLoad>
        <LazyLoad>
          <Input
            placeholder={{
              name: translate('contact.form.placeholder.name'),
              email: translate('contact.form.placeholder.email'),
              message: translate('contact.form.placeholder.message'),
              honeypot: translate('contact.form.placeholder.honeypot')
            }}
            label={{submit: translate('contact.form.label.submit')}}
            error={{
              offline: translate('contact.form.error.offline'),
              throttle: translate('contact.form.error.throttle'),
              input: {
                name: {
                  empty: translate('contact.form.error.input.name.empty'),
                  tooShort: translate('contact.form.error.input.name.tooShort'),
                  tooLong: translate('contact.form.error.input.name.tooLong'),
                  invalid: translate('contact.form.error.input.name.invalid')
                },
                email: {
                  empty: translate('contact.form.error.input.email.empty'),
                  tooShort: translate(
                    'contact.form.error.input.email.tooShort'
                  ),
                  tooLong: translate('contact.form.error.input.email.tooLong'),
                  invalid: translate('contact.form.error.input.email.invalid')
                },
                message: {
                  empty: translate('contact.form.error.input.message.empty'),
                  tooShort: translate(
                    'contact.form.error.input.message.tooShort'
                  ),
                  tooLong: translate('contact.form.error.input.message.tooLong')
                },
                honeypot: translate('contact.form.error.input.honeypot'),
                recaptcha: translate('contact.form.error.input.recaptcha')
              },
              client: translate('contact.form.error.client'),
              server: translate('contact.form.error.server'),
              limit: translate('contact.form.error.limit')
            }}
            success={translate('contact.form.success')}
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export type {FormProps};
export default Form;
