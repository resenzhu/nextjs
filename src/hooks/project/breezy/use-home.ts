import {
  type Chats,
  type Menu,
  setChats as setHomeChats,
  setMenu as setHomeMenu
} from '@redux/reducers/project/breezy/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  chats: Chats;
  menu: Menu;
  setChats: (chats: Chats) => void;
  setMenu: (menu: Menu) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setChats = (chats: Chats): void => {
    dispatch(setHomeChats(chats));
  };

  const setMenu = (menu: Menu): void => {
    dispatch(setHomeMenu(menu));
  };

  return {
    chats: useSelector((state) => state.project.breezy.home.chats),
    menu: useSelector((state) => state.project.breezy.home.menu),
    setChats: setChats,
    setMenu: setMenu
  };
};

export type {UseHome};
export default useHome;
