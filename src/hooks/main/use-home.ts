import {
  ShowChatbox,
  setShowChatbox as setHomeShowChatbox
} from '@redux/reducers/main/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  showChatbox: ShowChatbox;
  setShowChatbox: (showChatbox: ShowChatbox) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setShowChatbox = (showChatbox: ShowChatbox): void => {
    dispatch(setHomeShowChatbox(showChatbox));
  };

  return {
    showChatbox: useSelector((state) => state.main.home.showChatbox),
    setShowChatbox: setShowChatbox
  };
};

export type {UseHome};
export default useHome;
