import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {createMetadata} from '@utils/metadata';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)] sm:h-[calc(100vh-3.5rem)]'>
    <div className='flex h-full flex-col items-center'>
      <div className='relative h-1/5 w-full'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-profile-background.webp")] bg-cover bg-top bg-no-repeat brightness-50 contrast-125'></div>
        <div className='absolute h-full w-full bg-cyan-600 opacity-20'></div>
        <div className='relative flex h-full translate-y-1/2 items-center justify-center'>
          <img
            className='rounded-full border-8 contrast-125'
            src='/images/main/home-profile-avatar-original.webp'
            width={140}
            height={140}
          />
        </div>
      </div>
      <div className='relative flex h-full flex-col items-center justify-between pt-20'>
        <div className='flex flex-1 flex-col items-center'>
          <div className='text-2xl font-extrabold tracking-wide text-gray-600'>
            RESEN
          </div>
          <div className='text-md font-extrabold text-cyan-600'>
            FULL STACK DEVELOPER
          </div>
          <div className='w-4/5 pt-6 text-center text-gray-500'>
            Analytical programmer with a strong problem-solving mindset, adept
            at optimizing code for performance and efficiency.
          </div>
          <div className='flex w-36 flex-1 flex-col justify-center space-y-2'>
            <button
              className='border-2 border-cyan-600 bg-cyan-600 py-2 font-bold tracking-wider text-white active:bg-cyan-700 duration-150'
              type='button'
            >
              HELLO
            </button>
            <button
              className='border-2 border-cyan-600 py-2 font-bold tracking-wider text-cyan-600 hover:bg-cyan-600 hover:text-white active:bg-cyan-700 duration-150'
              type='button'
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className='flex w-1/2 items-center justify-between pb-6'>
          <a className='text-2xl text-cyan-600'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='text-2xl text-cyan-600'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className='text-2xl text-cyan-600'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='text-2xl text-cyan-600'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export {metadata};
export default Page;
