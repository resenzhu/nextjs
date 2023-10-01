'use client';

import {
  faBell,
  faLock,
  faMessage,
  faShield,
  faSignOutAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {Listbox} from '@headlessui/react';
import {TProfile} from '@components/project/breezy/home/profile/transition';

const Profile = (): JSX.Element => (
  <TProfile>
    <div className='flex h-[calc(100vh-3.5rem)] flex-col'>
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
    </div>
  </TProfile>
);

export default Profile;