import {faCheck, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';

type ChatsProps = {
  empty: {
    message: string;
    action: string;
  };
};

const Chats = ({empty}: ChatsProps): JSX.Element => (
  // <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
  //   <div className='w-2/3 space-y-8 text-center'>
  //     <p className='text-gray-500'>{empty.message}</p>
  //     <Browse label={empty.action} />
  //   </div>
  // </div>
  <div className='pb-14'>
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
  </div>
);

export type {ChatsProps};
export default Chats;
