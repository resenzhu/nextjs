'use client';

import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';

type ChatProps = {
  error: {
    offline: string;
  };
};

const Chat = ({error}: ChatProps): JSX.Element => {
  const {chatbot} = useHome();
  const {isOnline} = useApp();
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
      {!isOnline && (
        <div className='w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white'>
          {error.offline}
        </div>
      )}
    </>
  );
};

export type {ChatProps};
export default Chat;
