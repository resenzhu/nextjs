'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type CloseProps = {
  icon: IconDefinition;
};

const Close = ({icon}: CloseProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleChatbot = (show: boolean): void => {
    if (viewport.width <= 768 && section.chatbot !== show) {
      setSection({
        ...section,
        chatbot: show
      });
    }
  };

  return (
    <>
      {viewport.width < 768 && (
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
      )}
    </>
  );
};

export type {CloseProps};
export default Close;
