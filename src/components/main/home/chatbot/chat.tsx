'use client';

import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

const Chat = (): JSX.Element => {
  const {chatbot} = useHome();
  const {online} = useApp();
  return (
    <>
      {chatbot.chat.map(
        (chat, index): JSX.Element => (
          <>
            {chat.message && chat.message.length !== 0 && (
              <div
                className={
                  chat.sender === 'bot'
                    ? 'max-w-5/6 w-fit place-self-start bg-cyan-600 px-3 py-1 text-white sm:text-sm'
                    : 'max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1 sm:text-sm'
                }
                key={index}
              >
                {chat.message}
              </div>
            )}
          </>
        )
      )}
      {!online && (
        <div className='w-fit max-w-[80vw] place-self-start bg-cyan-600 px-3 py-1 text-white'>
          Oops! It appears that you&#39;re currently offline. Please ensure that
          you&#39;re connected to the internet and try again later.
        </div>
      )}
    </>
  );
};

export default Chat;
