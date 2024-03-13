import {
  TMessages,
  TMessagesActive,
  TMessagesEmpty,
  TMessagesList
} from '@components/project/breezy/home/messages/transition';
import Active from '@components/project/breezy/home/messages/active';
import Browse from '@components/project/breezy/home/messages/browse';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import List from '@components/project/breezy/home/messages/list';

type MessagesProps = {
  empty: {
    message: string;
    action: string;
  };
  active: {
    lastSeen: {
      known: string;
      unknown: string;
    };
    placeholder: string;
    backIcon: IconDefinition;
    sendIcon: IconDefinition;
  };
};

const Messages = ({empty, active}: MessagesProps): JSX.Element => (
  <TMessages>
    <div>
      <TMessagesEmpty>
        <div className='mx-4 flex h-[calc(100vh-3.5rem)] items-center justify-center'>
          <div className='w-3/4 space-y-8 text-center'>
            <p className='text-gray-500'>{empty.message}</p>
            <Browse label={empty.action} />
          </div>
        </div>
      </TMessagesEmpty>
      <TMessagesList>
        <div className='pb-14'>
          <List />
        </div>
      </TMessagesList>
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
      </div> */}
      <TMessagesActive>
        <div>
          <Active
            lastSeen={active.lastSeen}
            placeholder={active.placeholder}
            backIcon={active.backIcon}
            sendIcon={active.sendIcon}
          />
        </div>
      </TMessagesActive>
      {/* <TActive>
        <div className='flex h-screen flex-col'>
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
                    src='/images/project/breezy/home-messages-profile-picture.webp'
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
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
        </div>
      </TActive> */}
    </div>
  </TMessages>
);

export type {MessagesProps};
export default Messages;
