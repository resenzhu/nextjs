import {Experience, Me} from '@components/main/about';
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
              'PT Bintang Aplikasi Perkasa is an IT consulting company specializing in the field of networking. In this company, my position was a full-stack web developer responsible for handling several web client projects, whether it was developing new products or managing existing applications. The majority of these projects utilized CodeIgniter and React.'
          },
          {
            title: 'Jul 2022',
            cardTitle: 'PT Bank CIMB Niaga Tbk',
            cardSubtitle: 'Middleware Developer | Full Time',
            cardDetailedText:
              'PT Bank CIMB Niaga Tbk is the sixth largest bank in Indonesia based on assets and was established in 1955. In my role as a middleware developer in the Enterprise Service Bus (ESB) division, I am responsible for developing APIs used for various application integration purposes.'
          }
        ]}
      />
    </section>
    <section className='pt-12'>
      <Footer />
    </section>
  </>
);

export {metadata};
export default Page;
