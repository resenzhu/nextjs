import {
  type Messages,
  type Profile,
  type Users,
  setMessages as setHomeMessages,
  setProfile as setHomeProfile,
  setUsers as setHomeUsers
} from '@redux/reducers/project/breezy/home';
import {useDispatch, useSelector} from '@redux/hooks';

type UseHome = {
  messages: Messages;
  users: Users;
  profile: Profile;
  setMessages: (messages: Messages) => void;
  setUsers: (users: Users) => void;
  setProfile: (profile: Profile) => void;
};

const useHome = (): UseHome => {
  const dispatch = useDispatch();

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
    messages: useSelector((state) => state.project.breezy.home.messages),
    users: useSelector((state) => state.project.breezy.home.users),
    profile: useSelector((state) => state.project.breezy.home.profile),
    setMessages: setMessages,
    setUsers: setUsers,
    setProfile: setProfile
  };
};

export type {UseHome};
export default useHome;
