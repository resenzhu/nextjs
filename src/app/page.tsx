import {Avatar, Explore, Hello, Specialty} from '@components/main/home';
import {LandingPage as AnimateLandingPage} from '@components/main/home/animations';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)] sm:h-[calc(100vh-3.5rem)]'>
    <div className='absolute h-[calc(100vh-4rem)] sm:h-[calc(100vh-3.5rem)] w-full bg-[url("/images/main/shared-jumbotron.webp")] bg-cover bg-center bg-no-repeat brightness-50 contrast-125'></div>
    <div className='absolute h-[calc(100vh-4rem)] sm:h-[calc(100vh-3.5rem)] w-full bg-gray-700 opacity-70'></div>
    <AnimateLandingPage>
      <div className='relative mx-4 flex h-full justify-center'>
        <div className='flex flex-col items-center justify-center text-white'>
          <div className='pb-8'>
            <Avatar
              src='/images/main/home-avatar-original.webp'
              easterSrc='/images/main/home-avatar-easter.webp'
            />
          </div>
          <div className='flex flex-col items-center pb-16'>
            <div className='font-semibold tracking-wide text-gray-200'>
              HELLO, I AM
            </div>
            <div className='text-3xl font-extrabold'>RESEN</div>
            <div className='font-semibold tracking-wide text-gray-200'>
              I AM A
            </div>
            <div className='text-xl font-bold text-yellow-300'>
              <Specialty
                titles={[
                  'FULL STACK DEVELOPER',
                  'FRONT END DEVELOPER',
                  'BACK END DEVELOPER',
                  'MIDDLEWARE DEVELOPER',
                  'MOBILE LEGENDS PLAYER',
                  'HORROR ENTHUSIAST'
                ]}
              />
            </div>
          </div>
          <div className='flex w-36 flex-col space-y-3'>
            <Hello />
            <Explore />
          </div>
        </div>
      </div>
    </AnimateLandingPage>
  </section>
);

export {metadata};
export default Page;
