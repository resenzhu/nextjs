import {Experience, LinkedIn, Me, Skill, Web} from '@components/main/about';
import {Footer, Header} from '@components/main/shared';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
        content={[
          `Welcome to my personal portfolio website! My name is Resen, and I'm a Full Stack developer based in Jakarta with over ${Math.floor(
            DateTime.utc()
              .diff(DateTime.fromISO('2017-03-01').toUTC(), ['years'])
              .toObject().years ??
              new Date().getUTCFullYear() -
                new Date('2017-03-01').getUTCFullYear()
          )} years of experience in the field.`,
          'I specialize in both Front End and Back End development, bringing a comprehensive skill set to the table. With a strong focus on creating visually appealing and user-friendly web applications, I utilize technologies such as ReactJS, NextJS, and NodeJS to deliver exceptional results.',
          'From crafting captivating user interfaces to implementing robust functionality, I strive to create seamless and efficient websites. My passion for development drives me to continuously refine my skills, ensuring that I deliver high-quality solutions that meet the unique requirements of each project.',
          "Feel free to explore my portfolio and discover some of the projects I have worked on. If you have any questions, please don't hesitate to reach out. I am always open to connecting with anyone who shares a passion for web development and innovation."
        ]}
      />
    </section>
    <section className='h-full min-h-[40vh]'>
      <Experience
        title='WORK HISTORY'
        experiences={[
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
    <section className='h-full min-h-[40vh]'>
      <Web
        title='UNDER THE HOOD'
        content={[
          "Here, I'll provide you with some insights into the technologies and frameworks that power my personal portfolio website.",
          'This website is built using Next.js, a powerful React framework for server-side rendering. Next.js enables me to create both static and dynamic pages, resulting in a fast and efficient user experience.',
          "To style the website, I've utilized Tailwind CSS, a versatile utility-first CSS framework. Tailwind CSS offers a comprehensive set of pre-built components and utility classes, making it easy to create visually appealing and responsive designs.",
          "For managing the application state, I've integrated Redux. Redux is a reliable state management library that centralizes the data flow in my application. With Redux, I can effectively handle complex data interactions and ensure a smooth user experience.",
          "On the backend, I've implemented Node.js, a JavaScript runtime environment. Node.js allows me to handle server-side logic and API requests, providing a scalable and efficient foundation for my web application.",
          "To enable real-time communication between the frontend and backend, I've incorporated Socket.io. Socket.io is a powerful library that facilitates bidirectional and event-based communication. It empowers my website with instant updates and live interactions, enhancing the overall user experience.",
          "If you're interested in exploring the source code of my website, you can find it on my GitHub repository. Feel free to reach out if you have any questions or want to know more about my work."
        ]}
        repositories={[
          {
            icon: faGithub,
            label: 'Source code (frontend)',
            url: 'https://github.com/resenzhu/nextjs'
          },
          {
            icon: faGithub,
            label: 'Source code (backend)',
            url: 'https://github.com/resenzhu/nextjs-api'
          }
        ]}
      />
    </section>
    <section>
      <LinkedIn
        title='GET CONNECTED'
        description="Looking to learn more about my professional background? Visit my LinkedIn profile to uncover my extensive experience, industry insights, and professional achievements. Let's connect and forge valuable professional connections."
        action={{
          icon: faLinkedin,
          label: "Let's connect!",
          url: 'https://www.linkedin.com/in/resen'
        }}
      />
    </section>
    <section className='h-full min-h-[12rem] pt-20'>
      <Footer />
    </section>
  </>
);

export {metadata};
export default Page;
