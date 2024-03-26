import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/login';
import type {Metadata} from 'next';
import {createMetadata} from '@utils/metadata';
import {getTranslations} from 'next-intl/server';
import {locales} from '@navigation';
import {useTranslations} from 'next-intl';

const generateMetadata = async ({
  params: {locale}
}: {
  params: {locale: (typeof locales)[number]};
}): Promise<Metadata> => {
  const translate = await getTranslations({locale: locale});
  return createMetadata({
    title: translate('project.breezy.login.metadata.title'),
    description: translate('project.breezy.login.metadata.description'),
    url: '/project/breezy/login',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('project.breezy');
  return (
    <Auth
      welcome={translate('login.auth.welcome')}
      title={translate('login.auth.title')}
      subtitle={translate('login.auth.subtitle')}
    >
      <Form
        signup={{
          description: translate('login.auth.form.signup.description'),
          label: translate('login.auth.form.signup.label'),
          url: '/project/breezy/signup'
        }}
      />
    </Auth>
  );
};

export {generateMetadata};
export default Page;
