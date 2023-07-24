'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {TTyping} from '@components/main/home/chatbot/transition';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const Chat = (): JSX.Element => (
  <>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      Hello!
    </div>
    <div className='max-w-5/6 w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
      Hello
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      I want to know about you.
    </div>
    <div className='max-w-5/6 w-fit bg-cyan-600 px-3 py-1 text-white'>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using Content here, content here, making it look like
      readable English.
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested.
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      Hello!
    </div>
    <div className='max-w-5/6 w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
      Hello
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      I want to know about you.
    </div>
    <div className='max-w-5/6 w-fit bg-cyan-600 px-3 py-1 text-white'>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using Content here, content here, making it look like
      readable English.
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested.
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      Hello!
    </div>
    <div className='max-w-5/6 w-fit place-self-start bg-cyan-600 px-3 py-1 text-white'>
      Hello
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      I want to know about you.
    </div>
    <div className='max-w-5/6 w-fit bg-cyan-600 px-3 py-1 text-white'>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using Content here, content here, making it look like
      readable English.
    </div>
    <div className='max-w-5/6 w-fit place-self-end bg-gray-200 px-3 py-1'>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested.
    </div>
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

export default Chat;
