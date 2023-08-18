import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {LazyLoad} from '@components/main/shared';
import Link from 'next/link';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

type WebProps = {
  title: string;
  repository: string;
};

const Web = ({title, repository}: WebProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-10'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='space-y-6 text-center text-gray-600'>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          Here, I&#39;ll provide you with some insights into the technologies
          and frameworks that power my personal portfolio website.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-right animate-duration-700'>
          This website is built using Next.js, a powerful React framework for
          server-side rendering. Next.js enables me to create both static and
          dynamic pages, resulting in a fast and efficient user experience.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          To style the website, I&#39;ve utilized Tailwind CSS, a versatile
          utility-first CSS framework. Tailwind CSS offers a comprehensive set
          of pre-built components and utility classes, making it easy to create
          visually appealing and responsive designs.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-right animate-duration-700'>
          For managing the application state, I&#39;ve integrated Redux. Redux
          is a reliable state management library that centralizes the data flow
          in my application. With Redux, I can effectively handle complex data
          interactions and ensure a smooth user experience.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          On the backend, I&#39;ve implemented Node.js, a JavaScript runtime
          environment. Node.js allows me to handle server-side logic and API
          requests, providing a scalable and efficient foundation for my web
          application.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-right animate-duration-700'>
          To enable real-time communication between the frontend and backend,
          I&#39;ve incorporated Socket.io. Socket.io is a powerful library that
          facilitates bidirectional and event-based communication. It empowers
          my website with instant updates and live interactions, enhancing the
          overall user experience.
        </p>
      </LazyLoad>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          If you&#39;re interested in exploring the source code of my website,
          you can find it on my GitHub repository. Feel free to reach out if you
          have any questions or want to know more about my work.
        </p>
      </LazyLoad>
      <LazyLoad>
        <div className='mx-auto w-fit animate-fade-right animate-duration-700'>
          <Link
            href={repository}
            target='_blank'
          >
            <button
              className='flex space-x-3 border-cyan-600 bg-cyan-600 px-5 py-3 tracking-wider text-white duration-150 active:bg-cyan-700'
              type='button'
            >
              <FontAwesomeIcon
                className='text-2xl'
                icon={faGithub}
              />
              <span>Source code</span>
            </button>
          </Link>
        </div>
      </LazyLoad>
    </div>
  </div>
);

export type {WebProps};
export default Web;
