import {Footer, Header, RecaptchaV3} from '@components/main/shared';
import {Form} from '@components/main/contact';
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
    title: translate('main.contact.metadata.title'),
    description: translate('main.contact.metadata.description'),
    url: '/contact',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <RecaptchaV3 key={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V3}>
      <section>
        <Header
          title={translate('contact.header.title')}
          subtitle={translate('contact.header.subtitle')}
          description={translate('contact.header.description')}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <Form
          title={translate('contact.form.title')}
          description={translate('contact.form.description')}
        />
      </section>
      <section className='h-full min-h-[12rem] pt-20'>
        <Footer />
      </section>
    </RecaptchaV3>
  );
};

export {generateMetadata};
export default Page;
