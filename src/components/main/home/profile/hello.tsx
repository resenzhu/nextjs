'use client';

import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type HelloProps = {
  label: string;
};

const Hello = ({label}: HelloProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleChatbot = (show: boolean): void => {
    if (section.chatbot !== show) {
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
          className='border-2 border-cyan-600 bg-cyan-600 py-2 font-bold tracking-wider text-white duration-150 active:bg-cyan-700'
          type='button'
          onClick={(): void => handleToggleChatbot(true)}
        >
          {label}
        </button>
      )}
    </>
  );
};

export type {HelloProps};
export default Hello;
