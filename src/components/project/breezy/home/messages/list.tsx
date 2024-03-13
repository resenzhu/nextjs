'use client';

import {faCheck, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import useDashboard from '@hooks/project/breezy/use-dashboard';

const List = (): JSX.Element => {
  const {messages, users} = useDashboard();
  return (
    <>
      <div className='mx-4 py-4'>
        <input
          className='w-full bg-gray-100 px-3 py-2 outline-0'
          type='text'
          placeholder='Search chat'
        />
      </div>
      {messages.list.map(
        (message): JSX.Element => (
          <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
            <div className='mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-2xl font-semibold tracking-wider text-white'>
              {users.list
                .find((user): boolean => user.id === message.sender.id)
                ?.displayName.split(' ')
                .map((word): string => word[0] ?? '')
                .join('')
                .slice(0, 2)
                .toUpperCase()}
            </div>
            <div className='flex flex-1 flex-col'>
              <div className='flex items-center justify-between'>
                <div className='text-lg font-bold text-gray-700'>
                  {
                    users.list.find(
                      (user): boolean => user.id === message.sender.id
                    )?.displayName
                  }
                </div>
                <div className='text-sm text-gray-500'>19:42</div>
              </div>
              <div className='flex justify-between space-x-3'>
                <p className='text-sm leading-5 text-gray-500'>
                  Got it batman.
                </p>
                <FontAwesomeIcon
                  className='mt-1 text-lg text-gray-400'
                  icon={faCheck}
                />
              </div>
            </div>
          </div>
        )
      )}
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-sm text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='text-sm leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there,
              where...
            </p>
            <FontAwesomeIcon
              className='mt-1 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            <div className='text-sm font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='inline-block w-full text-ellipsis text-sm leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 py-1 text-sm font-bold text-white'>
              999+
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Batman</div>
            <div className='text-sm font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='inline-block w-full text-ellipsis font-semibold leading-5 text-purple-500'>
              Typing...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 py-1 text-sm font-bold text-white'>
              2
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Scarecrow</div>
            <div className='text-sm text-gray-500'>19:42</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='text-sm leading-5 text-gray-500'>Got it batman.</p>
            <FontAwesomeIcon
              className='mt-1 text-lg text-gray-400'
              icon={faCheck}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Resen</div>
            <div className='text-sm text-gray-500'>Wednesday</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='text-sm leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is not there.
            </p>
            <FontAwesomeIcon
              className='mt-1 text-lg text-green-500'
              icon={faCheckDouble}
            />
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            <div className='text-sm font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='inline-block w-full text-ellipsis text-sm leading-5 text-gray-500'>
              Batman I thought you were at home, but your house is notaa...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 py-1 text-sm font-bold text-white'>
              999+
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
            width={70}
            height={70}
            alt='profile picture'
          />
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='flex items-center justify-between'>
            <div className='text-lg font-bold text-gray-700'>Batman</div>
            <div className='text-sm font-bold text-purple-500'>12:30</div>
          </div>
          <div className='flex justify-between space-x-3'>
            <p className='inline-block w-full text-ellipsis font-semibold leading-5 text-purple-500'>
              Typing...
            </p>
            <div className='h-fit w-fit rounded-full bg-purple-500 px-2 py-1 text-sm font-bold text-white'>
              2
            </div>
          </div>
        </div>
      </div>
      <div className='flex cursor-pointer items-center px-5 py-3 hover:bg-gray-100'>
        <div className='mr-4'>
          <Image
            className='rounded-full'
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
            src='/images/project/breezy/home-messages-profile-picture.webp'
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
    </>
  );
};

export default List;
