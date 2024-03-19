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
          title='PROJECTS'
          projects={[
            {
              name: 'Breezy',
              description:
                'Effortless communication is just a tap away with Breezy. Designed to simplify your conversations, Breezy offers a clean and intuitive platform where you can effortlessly chat with friends and build meaningful connections. Enjoy the freedom of breezy conversations that let you focus on what truly matters.',
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
