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
        <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
          ABOUT ME
        </div>
        <div className='flex-1 animate-fade-up space-y-6 text-center text-gray-600 animate-duration-700'>
          <p>
            Welcome to my personal portfolio website! My name is Resen, and I&#39;m
            a Full Stack developer based in Jakarta with over five years of
            experience in the field.
          </p>
          <p>
            I specialize in both Front End and Back End development, bringing a
            comprehensive skill set to the table. With a strong focus on
            creating visually appealing and user-friendly web applications, I
            utilize technologies such as ReactJS, NextJS, and NodeJS to deliver
            exceptional results.
          </p>
          <p>
            From crafting captivating user interfaces to implementing robust
            functionality, I strive to create seamless and efficient websites.
            My passion for development drives me to continuously refine my
            skills, ensuring that I deliver high-quality solutions that meet the
            unique requirements of each project.
          </p>
          <p>
            Feel free to explore my portfolio and discover some of the projects
            I have worked on. If you have any questions, please don&#39;t
            hesitate to reach out. I am always open to connecting with anyone
            who shares a passion for web development and innovation.
          </p>
        </div>
      </div>
    </section>
  </>
);

export {metadata};
export default Page;
