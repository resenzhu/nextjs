'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import useHome from '@hooks/main/use-home';

type CloseProps = {
  icon: IconDefinition;
};

const Close = ({icon}: CloseProps): JSX.Element => {
  const {section, setSection} = useHome();

  const handleToggleChatbot = (show: boolean): void => {
    if (show !== section.chatbot) {
      setSection({
        ...section,
        chatbot: show
      });
    }
  };

  return (
    <button
      className='flex'
      type='button'
      onClick={(): void => handleToggleChatbot(false)}
    >
      <FontAwesomeIcon
        className='w-6 text-2xl'
        icon={icon}
      />
    </button>
  );
};

export type {CloseProps};
export default Close;
