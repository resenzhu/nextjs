import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {LazyLoad} from '@components/main/shared';
import Link from 'next/link';

type WebProps = {
  title: string;
  content: string[];
  github: {
    icon: IconDefinition;
    label: string;
    url: string;
  };
};

const Web = ({title, content, github}: WebProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-10 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
      {content.map(
        (paragraph, index): JSX.Element => (
          <LazyLoad key={index}>
            <p
              className={`${
                index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right'
              } animate-duration-700`}
            >
              {paragraph}
            </p>
          </LazyLoad>
        )
      )}
      <LazyLoad>
        <div className='mx-auto w-fit animate-fade-right animate-duration-700'>
          <Link
            href={github.url}
            target='_blank'
          >
            <button
              className='flex space-x-3 bg-cyan-600 px-5 py-3 tracking-wider text-white duration-150 active:bg-cyan-700'
              type='button'
            >
              <FontAwesomeIcon
                className='text-2xl'
                icon={github.icon}
              />
              <span>{github.label}</span>
            </button>
          </Link>
        </div>
      </LazyLoad>
    </div>
  </div>
);

export type {WebProps};
export default Web;
