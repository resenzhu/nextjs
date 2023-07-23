'use client';

import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {mainSocket} from '@utils/socket';
import useHome from '@hooks/main/use-home';

const Chat = (): JSX.Element => {
  const [rendered, setRendered] = useState<boolean>(false);
  const {chatbot, setChatbot} = useHome();

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): void => {
    if (rendered) {
      if (chatbot.chat.length === 0) {
        if (!chatbot.typing) {
          setChatbot({...chatbot, typing: true});
        }
        if (mainSocket.connected) {
          mainSocket.emit('ask-chatbot');
        }
      }
    }
  }, [rendered]);

  return (
    <>
      {/* <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>Hello!</div>
      <div className='w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
        Hello
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
        I want to know about you.
      </div>
      <div className='w-fit bg-cyan-600 px-3 py-1 text-white'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English.
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested.
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>Hello!</div>
      <div className='w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
        Hello
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
        I want to know about you.
      </div>
      <div className='w-fit bg-cyan-600 px-3 py-1 text-white'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English.
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested.
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>Hello!</div>
      <div className='w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
        Hello
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
        I want to know about you.
      </div>
      <div className='w-fit bg-cyan-600 px-3 py-1 text-white'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it look
        like readable English.
      </div>
      <div className='w-fit place-self-end bg-gray-200 px-3 py-1'>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested.
      </div> */}
      {chatbot.typing && (
        <div className='w-fit animate-fade-right place-self-start bg-cyan-600 px-3 py-1 text-white animate-duration-1000'>
          <FontAwesomeIcon
            className='animate-pulse animate-duration-1000 animate-infinite animate-ease-linear'
            icon={faEllipsisH}
          />
        </div>
      )}
    </>
  );
};

export default Chat;
