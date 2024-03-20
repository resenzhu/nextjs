import {Footer, Header} from '@components/main/shared';
import type {Metadata} from 'next';
import {Showcase} from '@components/main/portfolio';
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
    title: translate('main.portfolio.metadata.title'),
    description: translate('main.portfolio.metadata.description'),
    url: '/portfolio',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <>
      <section>
        <Header
          title={translate('portfolio.header.title')}
          subtitle={translate('portfolio.header.subtitle')}
          description={translate('portfolio.header.description')}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <Showcase
          title={translate('portfolio.showcase.title')}
          projects={[
            {
              name: translate('portfolio.showcase.project.breezy.title'),
              description: translate(
                'portfolio.showcase.project.breezy.description'
              ),
              url: '/project/breezy'
            }
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
