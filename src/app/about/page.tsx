import {Me, Skill} from '@components/main/about';
import {DateTime} from 'luxon';
import {Header} from '@components/main/shared';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'About | Resen',
  description:
    'Meet Resen, a passionate web developer showcasing skills, projects, and experiences in the dynamic field of web development.',
  url: '/about'
});

const Page = (): JSX.Element => (
  <>
    <section>
      <Header
        title='about'
        subtitle='Unveiling the Mind and Vision Behind the Website'
        description='Step behind the curtain and delve into the mind of a digital enthusiast, as I divulge the story of my adventures in design and development.'
      />
    </section>
    <section className='h-full min-h-[calc(100vh-4rem)] md:h-full md:min-h-[calc(100vh-3.5rem)]'>
      <Me
        title='MEET RESEN'
        yoe={Math.floor(
          DateTime.utc()
            .diff(DateTime.fromISO('2017-03-01').toUTC(), ['years'])
            .toObject().years ??
            new Date().getUTCFullYear() -
              new Date('2017-03-01').getUTCFullYear()
        )}
      />
    </section>
    <section className='h-full min-h-[calc(100vh-4rem)] md:h-full md:min-h-[calc(100vh-3.5rem)]'>
      <Skill title='SKILL SET' />
    </section>
  </>
);

export {metadata};
export default Page;
