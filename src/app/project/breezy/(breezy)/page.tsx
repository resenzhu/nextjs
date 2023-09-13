import {
  // faAngleRight,
  // faArrowLeftLong,
  // faBell,
  // faCheck,
  // faCheckDouble,
  // faEllipsisH,
  // faLock,
  faMessage,
  // faPaperPlane
  // faShield,
  // faSignOutAlt,
  // faUser,
  faUserCircle,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Navbar} from '@components/project/breezy/home';
// import Image from 'next/image';
// import {Listbox} from '@headlessui/react';
// import {Tooltip} from 'react-tooltip';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Connect with ease using Breezy. Enjoy fast and reliable chat, share moments, and connect with friends in a simple and enjoyable way.',
  url: '/project/breezy'
});

const Page = (): JSX.Element => (
  <>
    <div className='md:flex md:h-screen md:flex-row-reverse'>
      <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center md:mx-0 md:h-full md:flex-1'>
        <div className='w-2/3 space-y-8 text-center md:w-1/3 md:text-sm lg:w-1/6'>
          <p className='text-gray-500'>
            Welcome to Breezy! Connect with online users and experience the
            breezy conversations.
          </p>
          <button
            className='rounded-lg bg-purple-500 px-5 py-2 font-semibold text-white duration-150 hover:bg-purple-600'
            type='button'
          >
            Browse Users
          </button>
        </div>
      </div>
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
        <p className='mx-4 rounded-lg bg-purple-500 px-4 py-3 text-center text-sm text-white'>
          Currently, there are no users online for chat. To utilize the chat
          feature, kindly create a new account on a different browser or device
          while staying logged in to your current session. This will allow you to
          experience the chat functionality with the newly created account. Thank
          you for your understanding and cooperation.
        </p>
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
      {/* <div className='flex h-[calc(100vh-3.5rem)] flex-col'>
        <section className='flex-1 bg-gradient-to-b from-fuchsia-700 to-purple-600'>
          <div className='flex h-full items-center justify-center'>
            <div className='flex flex-col items-center justify-center space-y-5'>
              <div className='flex flex-col items-center justify-center space-y-2'>
                <Image
                  className='rounded-full border-8'
                  src='/images/project/breezy/home-chats-profile-picture.webp'
                  width={100}
                  height={100}
                  alt='profile picture'
                />
                <div className='text-center text-white'>
                  <div className='text-lg font-bold'>RESEN</div>
                  <div className='font-light'>@resenzhu</div>
                </div>
              </div>
              <Listbox>
                <Listbox.Button className='w-40 rounded-lg bg-white py-1 text-lg font-semibold text-green-500'>
                  online
                </Listbox.Button>
                <Listbox.Options className='absolute w-40 translate-y-40 rounded-lg bg-white text-center shadow-md'>
                  <Listbox.Option
                    className='cursor-pointer py-2 font-semibold text-green-500 hover:bg-purple-500 hover:text-white'
                    value='online'
                  >
                    online
                  </Listbox.Option>
                  <Listbox.Option
                    className='cursor-pointer py-2 font-semibold text-yellow-500 hover:bg-purple-500 hover:text-white'
                    value='away'
                  >
                    away
                  </Listbox.Option>
                  <Listbox.Option
                    className='cursor-pointer py-2 font-semibold text-gray-500 hover:bg-purple-500 hover:text-white'
                    value='invisible'
                  >
                    invisible
                  </Listbox.Option>
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
        </section>
        <section className='mx-4 flex flex-col space-y-5 py-5'>
          <button
            className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-purple-500'
            type='button'
          >
            <div className='w-6 text-center'>
              <FontAwesomeIcon icon={faUser} />
            </div>{' '}
            <span className='text-lg'>Profile</span>
          </button>
          <button
            className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-purple-500'
            type='button'
          >
            <div className='w-6 text-center'>
              <FontAwesomeIcon icon={faShield} />
            </div>{' '}
            <span className='text-lg'>Privacy</span>
          </button>
          <button
            className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-purple-500'
            type='button'
          >
            <div className='w-6 text-center'>
              <FontAwesomeIcon icon={faLock} />
            </div>{' '}
            <span className='text-lg'>Security</span>
          </button>
          <button
            className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-purple-500'
            type='button'
          >
            <div className='w-6 text-center'>
              <FontAwesomeIcon icon={faBell} />
            </div>{' '}
            <span className='text-lg'>Notifications</span>
          </button>
          <button
            className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-purple-500'
            type='button'
          >
            <div className='w-6 text-center'>
              <FontAwesomeIcon icon={faMessage} />
            </div>{' '}
            <span className='text-lg'>Chat</span>
          </button>
          <button
            className='flex w-fit items-baseline justify-center space-x-4 text-xl text-gray-600 duration-150 hover:text-red-500'
            type='button'
          >
            <div className='w-6 text-center'>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>{' '}
            <span className='text-lg'>Logout</span>
          </button>
        </section>
      </div> */}
      <Navbar>
        <Navbar.Menu></Navbar.Menu>
      </Navbar>
    </div>
    {/* <div className='flex h-screen flex-col'>
      <div className='border-b-2'>
        <div className='mx-4 flex space-x-5 py-2'>
          <button type='button'>
            <FontAwesomeIcon
              className='flex text-2xl text-gray-500 duration-150 hover:text-purple-500'
              icon={faArrowLeftLong}
            />
          </button>
          <div className='flex flex-1 items-center'>
            <div className='mr-3'>
              <Image
                className='rounded-full'
                src='/images/project/breezy/home-chats-profile-picture.webp'
                width={40}
                height={40}
                alt='profile picture'
              />
            </div>
            <div className='flex flex-col'>
              <div className='font-bold text-gray-700'>Batman</div>
              <div className='text-sm font-semibold text-gray-500'>
                typing...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col space-y-1 overflow-y-auto bg-gray-100 p-4'>
        <div className='flex w-fit flex-col place-self-start'>
          <p
            className='w-fit max-w-[80vw] rounded-r-xl rounded-bl-xl bg-purple-500 px-3 py-2 text-white shadow-md'
            style={{wordBreak: 'break-word'}}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className='mx-1 text-start'>
            <span
              className='text-sm text-gray-500'
              data-tooltip-id='1'
              data-tooltip-content='9/9/2023, 5:04 PM'
              data-tooltip-place='right'
            >
              5:04 PM
            </span>
            <Tooltip
              className='rounded-lg bg-gray-50 px-3 py-1 shadow-md'
              id='1'
              opacity={1}
              disableStyleInjection={true}
            />
          </div>
        </div>
        <div className='flex w-fit flex-col place-self-end'>
          <p
            className='w-fit max-w-[80vw] rounded-l-xl rounded-br-xl bg-white px-3 py-2 shadow-md'
            style={{wordBreak: 'break-word'}}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className='mx-1 text-end'>
            <div className='space-x-2'>
              <span
                className='text-sm text-gray-500'
                data-tooltip-id='2'
                data-tooltip-content='9/9/2023, 5:06 PM'
                data-tooltip-place='left'
              >
                5:06 PM
              </span>
              <Tooltip
                className='rounded-lg bg-gray-50 px-3 py-1 shadow-md'
                id='2'
                opacity={1}
                disableStyleInjection={true}
              />
              <FontAwesomeIcon
                className='text-green-500'
                icon={faCheckDouble}
              />
            </div>
          </div>
        </div>
        <div className='grid place-content-center py-2'>
          <div className='w-fit rounded-xl bg-white px-5 py-2 text-gray-500 shadow-md'>
            9/9/2023
          </div>
        </div>
        <div className='flex w-fit flex-col place-self-start'>
          <p
            className='w-fit max-w-[80vw] rounded-r-xl rounded-bl-xl bg-purple-500 px-3 py-2 text-white shadow-md'
            style={{wordBreak: 'break-word'}}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <div className='mx-1 text-start'>
            <span
              className='text-sm text-gray-500'
              data-tooltip-id='1'
              data-tooltip-content='9/9/2023, 5:04 PM'
              data-tooltip-place='right'
            >
              5:04 PM
            </span>
            <Tooltip
              className='rounded-lg bg-gray-50 px-3 py-1 shadow-md'
              id='1'
              opacity={1}
              disableStyleInjection={true}
            />
          </div>
        </div>
        <div className='flex w-fit flex-col place-self-end'>
          <p
            className='w-fit max-w-[80vw] rounded-l-xl rounded-br-xl bg-white px-3 py-2 shadow-md'
            style={{wordBreak: 'break-word'}}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className='mx-1 text-end'>
            <div className='space-x-2'>
              <span
                className='text-sm text-gray-500'
                data-tooltip-id='2'
                data-tooltip-content='9/9/2023, 5:06 PM'
                data-tooltip-place='left'
              >
                5:06 PM
              </span>
              <Tooltip
                className='rounded-lg bg-gray-50 px-3 py-1 shadow-md'
                id='2'
                opacity={1}
                disableStyleInjection={true}
              />
              <FontAwesomeIcon
                className='text-green-500'
                icon={faCheckDouble}
              />
            </div>
          </div>
        </div>
        <div className='grid w-fit place-self-start'>
          <p className='w-fit rounded-r-xl rounded-bl-xl bg-purple-500 px-3 py-2 text-white shadow-md'>
            <FontAwesomeIcon
              className='flex text-2xl'
              icon={faEllipsisH}
            />
          </p>
        </div>
      </div>
      <div className='border-t-2'>
        <form className='mx-4 flex items-center justify-between space-x-3 py-3'>
          <textarea
            className='w-full flex-1 resize-none bg-gray-50 px-3 py-2 outline-0'
            placeholder='Type a message'
            rows={1}
          />
          <button
            className='rounded-full bg-purple-500 p-1 duration-150 hover:bg-purple-600 disabled:bg-gray-300'
            type='submit'
          >
            <FontAwesomeIcon
              className='w-6 text-white'
              icon={faPaperPlane}
            />
          </button>
        </form>
      </div>
    </div> */}
    {/* <div className='flex h-screen flex-col'>
      <div className='border-b-2'>
        <div className='mx-4 flex space-x-5 py-3'>
          <button type='button'>
            <FontAwesomeIcon
              className='flex text-2xl text-gray-500 duration-150 hover:text-purple-500'
              icon={faArrowLeftLong}
            />
          </button>
          <div className='flex-1 text-xl font-semibold text-gray-600'>
            Profile
          </div>
        </div>
      </div>
      <div className='flex flex-col py-4'>
        <button
          className='mx-4 flex items-center rounded-lg border-2 px-4 py-3 text-gray-500 duration-150 hover:border-purple-500 hover:bg-purple-500 hover:text-white'
          type='button'
        >
          <div className='flex-1 text-start font-semibold'>Edit Profile</div>
          <FontAwesomeIcon
            className='flex text-xl'
            icon={faAngleRight}
          />
        </button>
      </div>
    </div> */}
  </>
);

export {metadata};
export default Page;
