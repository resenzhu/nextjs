import {
  type Menu,
  type Message,
  type User,
  setMenu as setHomeMenu,
  setMessages as setHomeMessages,
  setProfile as setHomeProfile,
  setUsers as setHomeUsers
} from '@redux/reducers/project/breezy/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  menu: Menu;
  messages: Message[];
  users: User[];
  profile: User;
  setMenu: (menu: Menu) => void;
  setMessages: (messages: Message[]) => void;
  setUsers: (users: User[]) => void;
  setProfile: (profile: User) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setMenu = (menu: Menu): void => {
    dispatch(setHomeMenu(menu));
  };

  const setMessages = (messages: Message[]): void => {
    dispatch(setHomeMessages(messages));
  };

  const setUsers = (users: User[]): void => {
    dispatch(setHomeUsers(users));
  };

  const setProfile = (profile: User): void => {
    dispatch(setHomeProfile(profile));
  };

  return {
    menu: useSelector((state) => state.project.breezy.home.menu),
    messages: useSelector((state) => state.project.breezy.home.messages),
    users: useSelector((state) => state.project.breezy.home.users),
    profile: useSelector((state) => state.project.breezy.home.profile),
    setMenu: setMenu,
    setMessages: setMessages,
    setUsers: setUsers,
    setProfile: setProfile
  };
};

export type {UseHome};
export default useHome;
