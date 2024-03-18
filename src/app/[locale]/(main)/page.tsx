import {Chatbot, Explore, Profile} from '@components/main/home';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import type {Metadata} from 'next';
import {createMetadata} from '@utils/metadata';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
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
    title: translate('main.home.metadata.title'),
    description: translate('main.home.metadata.description'),
    url: '/',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <section className='h-[calc(100vh-4rem)] md:mx-16 md:grid md:h-[calc(100vh-3.5rem)] md:items-center lg:mx-auto lg:w-4/6'>
      <div className='h-full md:grid md:h-4/5 md:max-h-full md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] md:gap-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_minmax(0,2fr)] lg:grid-rows-1'>
        <Profile
          picture={{
            src: '/images/main/home-profile-picture.webp',
            alt: translate('home.profile.picture.alt')
          }}
          name={translate('home.profile.name')}
          specialties={[
            translate('home.profile.specialty.fullStackDeveloper'),
            translate('home.profile.specialty.frontEndDeveloper'),
            translate('home.profile.specialty.backEndDeveloper'),
            translate('home.profile.specialty.middlewareDeveloper'),
            translate('home.profile.specialty.mobileLegendsPlayer'),
            translate('home.profile.specialty.horrorEnthusiast')
          ]}
          bio={translate('home.profile.bio')}
          socials={[
            {
              name: 'linkedin',
              icon: faLinkedin,
              url: 'https://linkedin.com/in/resen'
            },
            {
              name: 'github',
              icon: faGithub,
              url: 'https://github.com/resenzhu'
            },
            {
              name: 'instagram',
              icon: faInstagram,
              url: 'https://instagram.com/resenzhu'
            },
            {name: 'email', icon: faEnvelope, url: 'mailto:resen.zhu@gmail.com'}
          ]}
        />
        <Explore
          route={{
            home: {label: translate('home.explore.home'), url: '/'},
            about: {label: translate('home.explore.about'), url: '/about'},
            portfolio: {
              label: translate('home.explore.portfolio'),
              url: '/portfolio'
            },
            resources: {
              label: translate('home.explore.resources'),
              url: '/resources'
            },
            contact: {
              label: translate('home.explore.contact'),
              url: '/contact'
            },
            github: {
              label: translate('home.explore.github'),
              url: 'https://github.com/resenzhu/nextjs'
            }
          }}
        />
        <Chatbot
          botName={translate('home.chatbot.botName', {botName: 'RESEN'})}
        />
      </div>
    </section>
  );
};

export {generateMetadata};
export default Page;
