'use client';

import {faCheckDouble, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip} from '@components/project/breezy/shared';
import useDashboard from '@hooks/project/breezy/use-dashboard';

const Chat = (): JSX.Element => {
  const {messages} = useDashboard();
  return (
    <>
      {messages.list
        .find((message): boolean => message.sender.id === messages.active)
        ?.chats.map(
          (chat): JSX.Element => (
            <div
              className={`flex w-fit flex-col ${
                chat.self ? 'place-self-end' : 'place-self-start'
              }`}
            >
              <p
                className={`w-fit max-w-[80vw] rounded-r-xl rounded-bl-xl bg-purple-500 px-3 py-2 text-white shadow-md`}
                style={{wordBreak: 'break-word'}}
              >
                {chat.message}
              </p>
              <div className={`mx-1 ${chat.self ? 'text-end' : 'text-start'}`}>
                <Tooltip id='1'>
                  <span
                    className='text-sm text-gray-500'
                    data-tooltip-id='1'
                    data-tooltip-content='9/9/2023, 5:04 PM'
                    data-tooltip-place='right'
                  >
                    5:04 PM
                  </span>
                </Tooltip>
              </div>
            </div>
          )
        )}
      <div className='flex w-fit flex-col place-self-start'>
        <p
          className='w-fit max-w-[80vw] rounded-r-xl rounded-bl-xl bg-purple-500 px-3 py-2 text-white shadow-md'
          style={{wordBreak: 'break-word'}}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className='mx-1 text-start'>
          <Tooltip id='1'>
            <span
              className='text-sm text-gray-500'
              data-tooltip-id='1'
              data-tooltip-content='9/9/2023, 5:04 PM'
              data-tooltip-place='right'
            >
              5:04 PM
            </span>
          </Tooltip>
        </div>
      </div>
      <div className='flex w-fit flex-col place-self-end'>
        <p
          className='w-fit max-w-[80vw] rounded-l-xl rounded-br-xl bg-white px-3 py-2 shadow-md'
          style={{wordBreak: 'break-word'}}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className='mx-1 text-end'>
          <div className='space-x-2'>
            <Tooltip id='2'>
              <span
                className='text-sm text-gray-500'
                data-tooltip-id='2'
                data-tooltip-content='9/9/2023, 5:06 PM'
                data-tooltip-place='left'
              >
                5:06 PM
              </span>
            </Tooltip>
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className='mx-1 text-start'>
          <Tooltip id='1'>
            <span
              className='text-sm text-gray-500'
              data-tooltip-id='1'
              data-tooltip-content='9/9/2023, 5:04 PM'
              data-tooltip-place='right'
            >
              5:04 PM
            </span>
          </Tooltip>
        </div>
      </div>
      <div className='flex w-fit flex-col place-self-end'>
        <p
          className='w-fit max-w-[80vw] rounded-l-xl rounded-br-xl bg-white px-3 py-2 shadow-md'
          style={{wordBreak: 'break-word'}}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className='mx-1 text-end'>
          <div className='space-x-2'>
            <Tooltip id='2'>
              <span
                className='text-sm text-gray-500'
                data-tooltip-id='2'
                data-tooltip-content='9/9/2023, 5:06 PM'
                data-tooltip-place='left'
              >
                5:06 PM
              </span>
            </Tooltip>
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
    </>
  );
};

export default Chat;
