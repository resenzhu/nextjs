import {
  TEmpty,
  TFetched,
  TFetching,
  TList,
  TRetryFetch,
  TUsers
} from '@components/project/breezy/home/users/transition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Retry from '@components/project/breezy/home/users/retry';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

type UsersProps = {
  fetch: {
    message: string;
    action: string;
  };
  empty: {
    message: string;
  };
};

const Users = ({fetch, empty}: UsersProps): JSX.Element => (
  <TUsers>
    <TFetching>
      <div className='flex h-[calc(100vh-3.5rem)] items-center justify-center'>
        <FontAwesomeIcon
          className='animate-spin text-4xl text-purple-500 animate-duration-[1400ms] animate-infinite'
          icon={faSpinner}
        />
      </div>
    </TFetching>
    <TRetryFetch>
      <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
        <div className='w-3/4 space-y-8 text-center'>
          <p className='text-gray-500'>{fetch.message}</p>
          <Retry label={fetch.action} />
        </div>
      </div>
    </TRetryFetch>
    <TFetched>
      <TEmpty>
        <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
          <div className='w-3/4 space-y-8 text-center'>
            <p className='text-gray-500'>{empty.message}</p>
          </div>
        </div>
      </TEmpty>
      <TList>
        <div className='pb-14'>
          <div className='flex items-center px-5 py-3'>
            <div className='mr-4'>
              <Image
                className='rounded-full'
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
                src='/images/project/breezy/home-messages-profile-picture.webp'
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
        </div>
      </TList>
    </TFetched>
  </TUsers>
);

export default Users;
