'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type BackProps = {
  icon: IconDefinition;
};

const Back = ({icon}: BackProps): JSX.Element => {
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
        icon={icon}
      />
    </button>
  );
};

export type {BackProps};
export default Back;
