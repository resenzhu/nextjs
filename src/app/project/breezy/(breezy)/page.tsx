import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {createMetadata} from '@utils/metadata';
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Connect with ease using Breezy. Enjoy fast and reliable chat, share moments, and connect with friends in a simple and enjoyable way.',
  url: '/project/breezy'
});

const Page = (): JSX.Element => (
  <div className='flex flex-col'>
    <div className='flex w-screen border-b-2 text-lg font-bold shadow-sm'>
      <div className='flex-1 border-b-4 border-b-purple-500 py-3 text-center tracking-wide text-purple-500'>
        CHATS
      </div>
      <div className='flex-1 py-3 text-center tracking-wide text-gray-500'>
        USERS
      </div>
    </div>
    <div className='flex-1 px-5 py-3'>
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/chat-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not aaa...
            </p>
            <FontAwesomeIcon
              className='ml-2 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export {metadata};
export default Page;
