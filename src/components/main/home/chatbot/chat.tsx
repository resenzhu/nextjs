'use client';

import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {TTyping} from '@components/main/home/chatbot/transition';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

const Chat = (): JSX.Element => {
  const {online} = useApp();
  const {chatbot, setChatbot} = useHome();
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
      if (online && chatbot.chat.length === 0) {
        setChatbot({...chatbot, typing: true});
        mainSocket.emit('ask-chatbot', (response: any): void => {
          setChatbot({...chatbot, typing: false});
        });
      }
    }
  }, [rendered, online]);

  return (
    <>
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
