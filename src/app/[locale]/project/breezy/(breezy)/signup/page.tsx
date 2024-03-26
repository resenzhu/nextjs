import {Auth} from '@components/project/breezy/shared';
import {Form} from '@components/project/breezy/signup';
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
    title: translate('project.breezy.signup.metadata.title'),
    description: translate('project.breezy.signup.metadata.description'),
    url: '/project/breezy/signup',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('project.breezy');
  return (
    <Auth
      welcome={translate('signup.auth.welcome')}
      title={translate('signup.auth.title')}
      subtitle={translate('signup.auth.subtitle')}
    >
      <Form
        login={{
          description: translate('signup.auth.form.login.description'),
          label: translate('signup.auth.form.login.label'),
          url: '/project/breezy/login'
        }}
      />
    </Auth>
  );
};

export {generateMetadata};
export default Page;
