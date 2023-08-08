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
    <section className='h-[calc(100vh-4rem)] min-h-[calc(100vh-4rem)] md:h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-3.5rem)]'>
      <div className='mx-4 flex flex-col items-center space-y-6 py-8'>
        <div className='text-2xl font-extrabold text-cyan-600'>ABOUT ME</div>
        <div className='flex-1 space-y-6 text-center text-gray-600'>
          <p>
            Welcome to my personal portfolio website! My name is Resen and I am
            a web developer based in Jakarta. With a strong focus on both
            front-end and back-end development, I have gained extensive
            experience in creating dynamic web applications.
          </p>
          <p>
            With over 5 years of experience in the field, I have honed my skills
            and developed a deep understanding of web development principles and
            best practices. Throughout my career, I have worked on various
            projects, ranging from small to complex web applications.
          </p>
          <p>
            I am passionate about creating user-friendly and visually appealing
            websites that provide a seamless browsing experience. By leveraging
            the power of React.js, Next.js, and Node.js, I strive to deliver
            high-quality code that not only meets client requirements but also
            adheres to industry standards.
          </p>
          <p>
            Feel free to explore my portfolio and discover some of the projects
            I have worked on. If you have any questions, please don&#39;t hesitate
            to reach out. I am always open to connecting with anyone who shares
            a passion for web development and innovation.
          </p>
        </div>
      </div>
    </section>
  </>
);

export {metadata};
export default Page;
