import {Footer, Header} from '@components/main/shared';
import {Development} from '@components/main/resources';
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
    title: translate('main.resources.metadata.title'),
    description: translate('main.resources.metadata.description'),
    url: '/resources',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <>
      <section>
        <Header
          title={translate('resources.header.title')}
          subtitle={translate('resources.header.subtitle')}
          description={translate('resources.header.description')}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <Development
          content={[
            translate('resources.development.content.paragraph1'),
            translate('resources.development.content.paragraph2'),
            translate('resources.development.content.paragraph3'),
            translate('resources.development.content.paragraph4'),
            translate('resources.development.content.paragraph5')
          ]}
        />
      </section>
      <section className='h-full min-h-[12rem] pt-20'>
        <Footer />
      </section>
    </>
  );
};

export {generateMetadata};
export default Page;
