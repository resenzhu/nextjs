'use client';

import {TOffline} from '@components/main/home/chatbot/transition';
import useHome from '@hooks/main/use-home';

const Chat = (): JSX.Element => {
  const {chatbot} = useHome();
  return (
    <>
      {chatbot.chats.map(
        (chat, index): JSX.Element => (
          <div
            className={
              chat.sender === 'bot'
                ? 'w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white md:text-sm'
                : 'w-fit max-w-[80vw] place-self-end bg-gray-200 px-3 py-1 md:text-sm'
            }
            style={{
              wordBreak: 'break-word'
            }}
            key={index}
          >
            {chat.message}
          </div>
        )
      )}
      <TOffline>
        <div className='w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white'>
          Oops! It appears that you&#39;re currently offline. Please ensure that
          you&#39;re connected to the internet and try again later.
        </div>
      </TOffline>
    </>
  );
};

export default Chat;
