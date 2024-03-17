import {Chatbot, Explore, Profile} from '@components/main/home';
import {faEnvelope, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
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
          label={{
            home: 'HOME',
            about: 'ABOUT',
            portfolio: 'PORTFOLIO',
            resources: 'RESOURCES',
            contact: 'CONTACT',
            github: 'GITHUB'
          }}
        />
        <Chatbot
          name='RESEN [BOT]'
          placeholder='Type a message'
          sendIcon={faPaperPlane}
          message={{
            error: {
              offline:
                "Oops! It appears that you're currently offline. Please ensure that you're connected to the internet and try again later.",
              empty:
                'Uh-oh! It looks like you forgot to write a message. Please enter your message before sending it my way.',
              tooShort:
                'Oops! Your message must be at least 1 character long. Please enter a message with at least 1 character before sending it.',
              tooLong:
                'Oops! Your message exceeds the maximum limit of 160 characters. Please shorten your message and try again.',
              client:
                "Oops! It seems there was an issue with your message. Please make sure you've entered a valid message and try again.",
              server:
                "Oops! It looks like something went wrong on my end, and I'm unable to provide a response at the moment. I apologize for any inconvenience caused. Please come back later, and I'll be back up and running. Thank you for your patience."
            }
          }}
        />
      </div>
    </section>
  );
};

export {generateMetadata};
export default Page;
