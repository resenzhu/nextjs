'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Listbox} from '@headlessui/react';
import {TProfile} from '@components/project/breezy/home/profile/transition';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const Profile = (): JSX.Element => (
  <TProfile>
    <div className='flex h-[calc(100vh-3.5rem)] flex-col'>
      <section className='flex-1 bg-[url("/images/project/breezy/home-profile-cover.webp")] bg-cover bg-center bg-no-repeat'>
        <div className='flex h-full items-center justify-center'>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <div className='flex flex-col items-center justify-center space-y-4'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full border-4 bg-purple-500 text-3xl font-semibold tracking-wider text-white'>
                R
              </div>
              <div className='text-center text-white'>
                <div className='text-lg font-bold'>RESEN</div>
                <div className='font-light'>@resenzhu</div>
              </div>
            </div>
            <Listbox>
              <Listbox.Button className='w-40 rounded-lg bg-white py-1 text-lg font-semibold text-green-600 hover:animate-shake hover:animate-duration-700'>
                online
              </Listbox.Button>
              <Listbox.Options className='absolute w-40 translate-y-[9.6rem] rounded-lg bg-white text-center shadow-md'>
                <Listbox.Option
                  className='cursor-pointer py-2 font-semibold text-green-600 hover:rounded-lg hover:bg-gray-100'
                  value='online'
                >
                  online
                </Listbox.Option>
                <Listbox.Option
                  className='cursor-pointer py-2 font-semibold text-yellow-600 hover:rounded-lg hover:bg-gray-100'
                  value='away'
                >
                  away
                </Listbox.Option>
                <Listbox.Option
                  className='cursor-pointer py-2 font-semibold text-gray-600 hover:rounded-lg hover:bg-gray-100'
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
