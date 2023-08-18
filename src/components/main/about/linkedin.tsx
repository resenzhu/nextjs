import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {LazyLoad} from '@components/main/shared';
import Link from 'next/link';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

type LinkedInProps = {
  title: string;
  profile: string;
};

const LinkedIn = ({title, profile}: LinkedInProps): JSX.Element => (
  <div className='mx-4 flex flex-col items-center space-y-6 pt-10 md:mx-0'>
    <LazyLoad>
      <div className='animate-fade-right text-2xl font-extrabold text-cyan-600 animate-duration-700'>
        {title}
      </div>
    </LazyLoad>
    <div className='space-y-6 text-center text-gray-600 md:mx-auto md:w-2/3 lg:w-1/2'>
      <LazyLoad>
        <p className='animate-fade-left animate-duration-700'>
          Looking to learn more about my professional background? Visit my
          LinkedIn profile to uncover my extensive experience, industry
          insights, and professional achievements. Let&#39;s connect and forge
          valuable professional connections.
        </p>
      </LazyLoad>
      <LazyLoad>
        <div className='mx-auto w-fit animate-fade-right animate-duration-700'>
          <Link
            href={profile}
            target='_blank'
          >
            <button
              className='flex space-x-3 border-cyan-600 bg-cyan-600 px-5 py-3 tracking-wider text-white duration-150 active:bg-cyan-700'
              type='button'
            >
              <FontAwesomeIcon
                className='text-2xl'
                icon={faLinkedin}
              />
              <span>Let&#39;s connect!</span>
            </button>
          </Link>
        </div>
      </LazyLoad>
    </div>
  </div>
);

export type {LinkedInProps};
export default LinkedIn;