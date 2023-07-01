import {Avatar, Specialty} from '@components/main/home';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resen | Full Stack Developer',
  description:
    'Welcome to my NextJS website, a showcase of my portfolio and projects brought to life with cutting-edge technology.',
  url: '/'
});

const Page = (): JSX.Element => (
  <section className='h-[calc(100vh-4rem)]'>
    <div className='absolute h-[calc(100vh-4rem)] w-full bg-[url("/main/home/jumbotron.webp")] bg-cover bg-center bg-no-repeat brightness-50'></div>
    <div className='relative mx-4 flex h-full justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='pb-8'>
          <Avatar
            src='/main/home/avatar-original.webp'
            easter='/main/home/avatar-easter.webp'
          />
        </div>
        <div className='flex flex-col items-center space-y-1 text-white'>
          <div className='text-lg font-semibold'>Hello, I am</div>
          <div className='text-3xl font-extrabold'>RESEN</div>
          <div className='text-xl font-bold italic text-yellow-400'>
            <Specialty
              titles={[
                'FULL STACK DEVELOPER',
                'FRONT END DEVELOPER',
                'BACK END DEVELOPER',
                'MIDDLEWARE DEVELOPER'
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export {metadata};
export default Page;
