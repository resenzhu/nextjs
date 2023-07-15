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
        <div className='absolute h-full w-full bg-cyan-600 opacity-40'></div>
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
          <div className='text-lg font-extrabold text-cyan-600'>
            FULL STACK DEVELOPER
          </div>
          <div className='w-4/5 py-4 text-center text-gray-500'>
            Analytical programmer with a strong problem-solving mindset, adept
            at optimizing code for performance and efficiency.
          </div>
          <div className='flex w-36 flex-1 flex-col justify-center space-y-2'>
            <button
              className='border-2 border-cyan-600 bg-cyan-600 py-2 font-bold tracking-wider text-white duration-150 active:bg-cyan-700'
              type='button'
            >
              HELLO
            </button>
            <button
              className='border-2 border-cyan-600 py-2 font-bold tracking-wider text-cyan-600 duration-150 hover:bg-cyan-600 hover:text-white active:bg-cyan-700'
              type='button'
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className='flex w-1/2 items-center justify-between pb-6 pt-4'>
          <a
            className='text-2xl text-cyan-600 duration-150 active:text-cyan-700'
            href='#'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className='text-2xl text-cyan-600 duration-150 active:text-cyan-700'
            href='#'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className='text-2xl text-cyan-600 duration-150 active:text-cyan-700'
            href='#'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className='text-2xl text-cyan-600 duration-150 active:text-cyan-700'
            href='#'
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
    {/* <div className='grid h-full grid-cols-2 gap-2 px-4 py-6'>
      <div className='relative'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-explore-home.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
        <div className='relative h-full'>
          <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
            HOME
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-explore-about.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
        <div className='relative h-full'>
          <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
            ABOUT
          </div>
        </div>
      </div>
      <div className='relative col-span-2'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-explore-portfolio.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
        <div className='relative h-full'>
          <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
            PORTFOLIO
          </div>
        </div>
      </div>
      <div className='relative col-span-2'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-explore-resources.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
        <div className='relative h-full'>
          <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
            RESOURCES
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-explore-contact.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
        <div className='relative h-full'>
          <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
            CONTACT
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute h-full w-full bg-[url("/images/main/home-explore-github.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
        <div className='relative h-full'>
          <div className='absolute bottom-0 px-2 py-1 text-sm font-bold text-white'>
            GITHUB
          </div>
        </div>
      </div>
    </div>
    <div className='absolute bottom-0 h-full w-full'>
      <div className='absolute h-full w-full bg-black opacity-60'></div>
      <div className='fixed bottom-0 w-full bg-white'>
        <div className='bg-cyan-600'>
          <div className='mx-4 flex justify-between py-3 align-middle text-white'>
            <span className='font-bold'>RESEN</span>
            <span className='font-semibold'>CLOSE</span>
          </div>
        </div>
        <div className='h-80'>
          <div className='mx-4 grid h-80 space-y-2 overflow-y-auto py-4'>
            <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
              Hello!
            </div>
            <div className='w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
              Hello
            </div>
            <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
              I want to know about you.
            </div>
            <div className='w-fit bg-cyan-600 px-3 py-1 text-white'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
            <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </div>
          </div>
        </div>
        <div className='border-t-2'>
          <div className='mx-4 space-y-2 py-4 text-white'>
            <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
              I want to know about you.
            </div>
            <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
              What projects do you have?
            </div>
            <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
              I want to know about you.
            </div>
            <div className='w-fit bg-cyan-600 px-3 py-1 duration-150 hover:bg-cyan-700'>
              What projects do you have?
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </section>
);

export {metadata};
export default Page;
