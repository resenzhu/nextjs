import {
  faCheck,
  faCheckDouble,
  faMessage,
  faUserCircle,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Connect with ease using Breezy. Enjoy fast and reliable chat, share moments, and connect with friends in a simple and enjoyable way.',
  url: '/project/breezy'
});

const Page = (): JSX.Element => (
  <>
    {/* <div className='pb-14'>
      <div className='mx-4 py-4'>
        <input
          className='w-full bg-gray-100 px-3 py-2 outline-0'
          type='text'
          placeholder='Search chat'
        />
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there
            </p>
            <FontAwesomeIcon
              className='ml-2 mt-1 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>
              Bruce Wayne Brucee
            </div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              999+
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Batman</div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis font-semibold leading-5 text-purple-500'>
              Typing...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              2
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Scarecrow</div>
            <div className='text-gray-500'>19:42</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there
            </p>
            <FontAwesomeIcon
              className='ml-2 mt-1 text-lg text-gray-400'
              icon={faCheck}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there
            </p>
            <FontAwesomeIcon
              className='ml-2 mt-1 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>
              Bruce Wayne Brucee
            </div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              999+
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Batman</div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis font-semibold leading-5 text-purple-500'>
              Typing...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              2
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there
            </p>
            <FontAwesomeIcon
              className='ml-2 mt-1 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>
              Bruce Wayne Brucee
            </div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              999+
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Batman</div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis font-semibold leading-5 text-purple-500'>
              Typing...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              2
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Scarecrow</div>
            <div className='text-gray-500'>19:42</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there
            </p>
            <FontAwesomeIcon
              className='ml-2 mt-1 text-lg text-gray-400'
              icon={faCheck}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between'>
            <p className='leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there
            </p>
            <FontAwesomeIcon
              className='ml-2 mt-1 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>
              Bruce Wayne Brucee
            </div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              999+
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Batman</div>
            <div className='font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between'>
            <p className='inline-block w-full text-ellipsis font-semibold leading-5 text-purple-500'>
              Typing...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 font-bold text-white'>
              2
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <div className='pb-14'>
      <div className='mx-4 py-4'>
        <input
          className='w-full bg-gray-100 px-3 py-2 outline-0'
          type='text'
          placeholder='Search user'
        />
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Resen</div>
            <div className='text-gray-600'>@resenzhu</div>
            <div className='font-semibold text-green-500'>online</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Batman</div>
            <div className='text-gray-600'>@batman</div>
            <div className='font-semibold text-red-500'>offline</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Resen</div>
            <div className='text-gray-600'>@resenzhu</div>
            <div className='font-semibold text-green-500'>online</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Batman</div>
            <div className='text-gray-600'>@batman</div>
            <div className='font-semibold text-red-500'>offline</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Resen</div>
            <div className='text-gray-600'>@resenzhu</div>
            <div className='font-semibold text-green-500'>online</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Batman</div>
            <div className='text-gray-600'>@batman</div>
            <div className='font-semibold text-red-500'>offline</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Resen</div>
            <div className='text-gray-600'>@resenzhu</div>
            <div className='font-semibold text-green-500'>online</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center px-5 py-3'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-chats-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 justify-between'>
          <div className='flex flex-col leading-5'>
            <div className='font-bold text-gray-700'>Batman</div>
            <div className='text-gray-600'>@batman</div>
            <div className='font-semibold text-red-500'>offline</div>
          </div>
          <div className='grid place-content-center'>
            <button
              className='rounded-lg bg-purple-500 px-5 py-2 text-sm font-semibold text-white duration-150 hover:bg-purple-600'
              type='button'
            >
              CHAT
            </button>
          </div>
        </div>
      </div>
    </div> */}
    <div className='fixed bottom-0 flex w-screen justify-evenly border-t-2 bg-white shadow-sm'>
      <div className='grid flex-1 place-content-center border-t-4 border-t-purple-500 py-4 text-purple-500 duration-150'>
        <FontAwesomeIcon
          className='cursor-pointer text-xl'
          icon={faMessage}
        />
      </div>
      <div className='grid flex-1 place-content-center py-4 text-gray-500 duration-150'>
        <FontAwesomeIcon
          className='cursor-pointer text-xl hover:text-purple-500'
          icon={faUserFriends}
        />
      </div>
      <div className='grid flex-1 place-content-center py-4 text-gray-500 duration-150'>
        <FontAwesomeIcon
          className='cursor-pointer text-2xl hover:text-purple-500'
          icon={faUserCircle}
        />
      </div>
    </div>
  </>
);

export {metadata};
export default Page;
