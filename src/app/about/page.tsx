import {Experience, Me, Skill} from '@components/main/about';
import {Footer, Header} from '@components/main/shared';
import {DateTime} from 'luxon';
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
    <section className='h-full min-h-[40vh]'>
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
    <section className='h-full min-h-[40vh]'>
      <Experience
        title='WORK HISTORY'
        experience={[
          {
            title: 'Mar 2017',
            cardTitle: 'Bina Nusantara IT Division',
            cardSubtitle: 'Web Developer | Internship',
            cardDetailedText:
              'Bina Nusantara IT Division is one of the Bina Nusantara divisions that provide information technology support for other units under the auspices of the Bina Nusantara Foundation. It was here that I began my career as a full stack web developer, where I handled a project called Binusmaya, which is a learning management system application based on the CodeIgniter framework.'
          },
          {
            title: 'Feb 2019',
            cardTitle: 'Creator of PDF Gear',
            cardSubtitle: '.NET Developer | Self-Employed',
            cardDetailedText:
              "I am a curious individual who enjoys learning new things. It all started from my curiosity, where I learned how to create a simple desktop application using the Windows Presentation Foundation (WPF) framework based on the C# programming language. Gradually implementing features one by one, I didn't realize that in the end, I successfully developed a complex PDF document manipulation application that I named PDF Gear."
          },
          {
            title: 'Nov 2020',
            cardTitle: 'PT Bintang Aplikasi Perkasa',
            cardSubtitle: 'Web Developer | Full Time',
            cardDetailedText:
              'PT Bintang Aplikasi Perkasa is an IT consulting company specializing in networking. In this start-up company, I worked as a full-stack developer, handling various web client projects. My responsibilities included developing new products and managing existing applications, with a majority of them utilizing CodeIgniter, React.js, and Node.js.'
          },
          {
            title: 'Jul 2022',
            cardTitle: 'PT Bank CIMB Niaga Tbk',
            cardSubtitle: 'Middleware Developer | Full Time',
            cardDetailedText:
              'PT Bank CIMB Niaga Tbk is the sixth largest bank in Indonesia based on assets, established in 1955. In my role as a middleware developer in the Enterprise Service Bus (ESB) division, which is relatively new to me, I am responsible for developing APIs used for various application integration purposes using tools such as IBM MQ, IBM App Connect, and others.'
          }
        ]}
      />
    </section>
    <section className='h-full min-h-[40vh]'>
      <Skill
        title='SKILL SET'
        skills={[
          'HTML',
          'CSS',
          'Bootstrap',
          'SASS',
          'TailwindCSS',
          'JavaScript',
          'jQuery',
          'ReactJS',
          'NextJS',
          'Redux',
          'NodeJS',
          'ExpressJS',
          'SocketIO',
          'CSharp',
          'DotNet',
          'PHP',
          'CodeIgniter',
          'MySQL',
          'SQLServer',
          'GraphQL',
          'YAML',
          'Postman',
          'Heroku',
          'GitHub',
          'Trello',
          'VSCode'
        ]}
      />
    </section>
    <section className='h-full min-h-[12rem] pt-20'>
      <Footer />
    </section>
  </>
);

export {metadata};
export default Page;
