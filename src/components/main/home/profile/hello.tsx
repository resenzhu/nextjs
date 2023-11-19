'use client';

import {Button} from '@components/main/shared';
import useApp from '@hooks/app/use-app';
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
        <Button onClick={(): void => handleToggleChatbot(true)}>{label}</Button>
      )}
    </>
  );
};

export type {HelloProps};
export default Hello;
