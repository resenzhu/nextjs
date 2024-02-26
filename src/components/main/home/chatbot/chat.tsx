'use client';

import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';

type ChatProps = {
  offline: string;
};

const Chat = ({offline}: ChatProps): JSX.Element => {
  const {chatbot} = useHome();
  const {online} = useApp();
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
      {!online && (
        <div className='w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white'>
          {offline}
        </div>
      )}
    </>
  );
};

export type {ChatProps};
export default Chat;
