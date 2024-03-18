'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';

const Close = (): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleChatbot = (show: boolean): void => {
    if (viewport.width <= 768 && section.isChatbotShown !== show) {
      setSection({
        ...section,
        isChatbotShown: show
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
            icon={faClose}
          />
        </button>
      )}
    </>
  );
};

export default Close;
