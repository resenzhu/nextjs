import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Connect with ease using Breezy. Enjoy fast and reliable chat, share moments, and connect with friends in a simple and enjoyable way.',
  url: '/project/breezy'
});

const Page = (): JSX.Element => (
  <>
    <div className='fixed top-0 flex w-screen border-b-2 text-lg font-bold shadow-sm'>
      <div className='flex-1 border-b-4 border-b-purple-500 py-3 text-center tracking-wide text-purple-500'>
        CHATS
      </div>
      <div className='flex-1 py-3 text-center tracking-wide text-gray-500'>
        USERS
      </div>
    </div>
  </>
);

export {metadata};
export default Page;
