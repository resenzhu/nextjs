'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import useDashboard from '@hooks/project/breezy/use-dashboard';

const Back = (): JSX.Element => {
  const {messages, setMessages} = useDashboard();

  const handleGoBack = (): void => {
    setMessages({
      ...messages,
      active: null
    });
  };

  return (
    <button
      type='button'
      onClick={(): void => handleGoBack()}
    >
      <FontAwesomeIcon
        className='flex text-2xl text-gray-500 duration-150 hover:text-purple-500'
        icon={faArrowLeftLong}
      />
    </button>
  );
};

export default Back;
