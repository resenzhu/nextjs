'use client';

import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';
import {useTranslations} from 'next-intl';

const Chat = (): JSX.Element => {
  const {chatbot} = useHome();
  const {isOnline} = useApp();
  const translate = useTranslations('main');
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
          {translate('home.chatbot.error.offline')}
        </div>
      )}
    </>
  );
};

export default Chat;
