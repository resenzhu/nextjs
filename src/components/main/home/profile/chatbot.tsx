'use client';

import {Button} from '@components/main/shared';
import useApp from '@hooks/app/use-app';
import useHome from '@hooks/main/use-home';

type ChatbotProps = {
  label: string;
};

const Chatbot = ({label}: ChatbotProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleChatbot = (show: boolean): void => {
    if (section.isChatbotShown !== show) {
      setSection({
        ...section,
        isChatbotShown: show
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

export type {ChatbotProps};
export default Chatbot;
