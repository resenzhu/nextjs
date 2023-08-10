import {LazyLoad} from '@components/main/shared';

type MeProps = {
  title: string;
  yoe: number;
};

const Me = ({title, yoe}: MeProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-8'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='flex-1 space-y-6 text-center text-gray-600'>
      <LazyLoad>
        <p className='animate-fade-right animate-duration-700'>
          Welcome to my personal portfolio website! My name is Resen, and
          I&#39;m a Full Stack developer based in Jakarta with over {yoe} years
          of experience in the field.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          I specialize in both Front End and Back End development, bringing a
          comprehensive skill set to the table. With a strong focus on creating
          visually appealing and user-friendly web applications, I utilize
          technologies such as ReactJS, NextJS, and NodeJS to deliver
          exceptional results.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-right animate-duration-700'>
          From crafting captivating user interfaces to implementing robust
          functionality, I strive to create seamless and efficient websites. My
          passion for development drives me to continuously refine my skills,
          ensuring that I deliver high-quality solutions that meet the unique
          requirements of each project.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          Feel free to explore my portfolio and discover some of the projects I
          have worked on. If you have any questions, please don&#39;t hesitate
          to reach out. I am always open to connecting with anyone who shares a
          passion for web development and innovation.
        </p>
      </LazyLoad>
    </div>
  </div>
);

export type {MeProps};
export default Me;
