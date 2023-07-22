import {
  type Chatbot,
  type Section,
  setChatbot as setHomeChatbot,
  setSection as setHomeSection
} from '@redux/reducers/main/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  section: Section;
  chatbot: Chatbot;
  setSection: (section: Section) => void;
  setChatbot: (chatbot: Chatbot) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setSection = (section: Section): void => {
    dispatch(setHomeSection(section));
  };

  const setChatbot = (chatbot: Chatbot): void => {
    dispatch(setHomeChatbot(chatbot));
  };

  return {
    section: useSelector((state) => state.main.home.section),
    chatbot: useSelector((state) => state.main.home.chatbot),
    setSection: setSection,
    setChatbot: setChatbot
  };
};

export type {UseHome};
export default useHome;
