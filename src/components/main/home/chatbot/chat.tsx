'use client';

import {TOffline, TTyping} from '@components/main/home/chatbot/transition';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import useHome from '@hooks/main/use-home';

const Chat = (): JSX.Element => {
  const {chatbot} = useHome();

  return (
    <>
      {chatbot.chat.map(
        (chat, index): JSX.Element => (
          <div
            className={
              chat.sender === 'bot'
                ? 'max-w-5/6 float-left clear-left w-fit bg-cyan-600 px-3 py-1 text-white'
                : 'max-w-5/6 float-right clear-right w-fit bg-gray-200 px-3 py-1'
            }
            key={index}
          >
            {chat.message}
          </div>
        )
      )}
      <TOffline>
        <div className='w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white'>
          Oops! It appears that you're currently offline. Please ensure that
          you're connected to the internet and try again later.
        </div>
      </TOffline>
      <TTyping>
        <div className='w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white'>
          <FontAwesomeIcon
            className='animate-pulse animate-duration-1000 animate-infinite animate-ease-linear'
            icon={faEllipsisH}
          />
        </div>
      </TTyping>
    </>
  );
};

export default Chat;
