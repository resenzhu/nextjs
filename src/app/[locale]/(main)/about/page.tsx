import {
  Author,
  Experience,
  GitHub,
  LinkedIn,
  Skill
} from '@components/main/about';
import {Footer, Header} from '@components/main/shared';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {DateTime} from 'luxon';
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
    title: translate('main.about.metadata.title'),
    description: translate('main.about.metadata.description'),
    url: '/about',
    locale: locale
  });
};

const Page = (): JSX.Element => {
  const translate = useTranslations('main');
  return (
    <>
      <section>
        <Header
          title={translate('about.header.title')}
          subtitle={translate('about.header.subtitle')}
          description={translate('about.header.description')}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <Author
          title={translate('about.author.title')}
          content={[
            translate('about.author.content.paragraph1', {
              years: Math.floor(
                DateTime.utc()
                  .toLocal()
                  .diff(DateTime.fromISO('2017-03-01'), ['years']).years
              )
            }),
            translate('about.author.content.paragraph2'),
            translate('about.author.content.paragraph3'),
            translate('about.author.content.paragraph4')
          ]}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <Experience
          title={translate('about.experience.title')}
          experiences={[
            {
              title: translate('about.experience.career.position1.startDate'),
              cardTitle: translate('about.experience.career.position1.company'),
              cardSubtitle: translate(
                'about.experience.career.position1.title'
              ),
              cardDetailedText: translate(
                'about.experience.career.position1.description'
              )
            },
            {
              title: translate('about.experience.career.position2.startDate'),
              cardTitle: translate('about.experience.career.position2.company'),
              cardSubtitle: translate(
                'about.experience.career.position2.title'
              ),
              cardDetailedText: translate(
                'about.experience.career.position2.description'
              )
            },
            {
              title: translate('about.experience.career.position3.startDate'),
              cardTitle: translate('about.experience.career.position3.company'),
              cardSubtitle: translate(
                'about.experience.career.position3.title'
              ),
              cardDetailedText: translate(
                'about.experience.career.position3.description'
              )
            },
            {
              title: translate('about.experience.career.position4.startDate'),
              cardTitle: translate('about.experience.career.position4.company'),
              cardSubtitle: translate(
                'about.experience.career.position4.title'
              ),
              cardDetailedText: translate(
                'about.experience.career.position4.description'
              )
            }
          ]}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <Skill
          title='SKILL SET'
          skills={translate('about.skill.set').split(',')}
        />
      </section>
      <section className='h-full min-h-[40vh]'>
        <GitHub
          title={translate('about.github.title')}
          content={[
            translate('about.github.content.paragraph1'),
            translate('about.github.content.paragraph2'),
            translate('about.github.content.paragraph3'),
            translate('about.github.content.paragraph4'),
            translate('about.github.content.paragraph5'),
            translate('about.github.content.paragraph6'),
            translate('about.github.content.paragraph7'),
            translate('about.github.content.paragraph8')
          ]}
          repositories={[
            {
              icon: faGithub,
              label: translate('about.github.repository.label.frontEnd'),
              url: 'https://github.com/resenzhu/nextjs'
            },
            {
              icon: faGithub,
              label: translate('about.github.repository.label.backEnd'),
              url: 'https://github.com/resenzhu/nextjs-api'
            }
          ]}
        />
      </section>
      <section>
        <LinkedIn
          title={translate('about.linkedin.title')}
          description={translate('about.linkedin.description')}
          action={{
            icon: faLinkedin,
            label: translate('about.linkedin.connect'),
            url: 'https://www.linkedin.com/in/resen'
          }}
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
