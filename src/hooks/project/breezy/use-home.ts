import {
  type Menu,
  type Messages,
  type Profile,
  type Users,
  setMenu as setHomeMenu,
  setMessages as setHomeMessages,
  setProfile as setHomeProfile,
  setUsers as setHomeUsers
} from '@redux/reducers/project/breezy/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  menu: Menu;
  messages: Messages;
  users: Users;
  profile: Profile;
  setMenu: (menu: Menu) => void;
  setMessages: (messages: Messages) => void;
  setUsers: (users: Users) => void;
  setProfile: (profile: Profile) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

  const setMenu = (menu: Menu): void => {
    dispatch(setHomeMenu(menu));
  };

  const setMessages = (messages: Messages): void => {
    dispatch(setHomeMessages(messages));
  };

  const setUsers = (users: Users): void => {
    dispatch(setHomeUsers(users));
  };

  const setProfile = (profile: Profile): void => {
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
