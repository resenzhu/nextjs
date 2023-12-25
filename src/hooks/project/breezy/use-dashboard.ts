import {
  type ForceLogout,
  type Menu,
  type Messages,
  type Profile,
  type Settings,
  type Users,
  setForceLogout as setDashboardForceLogout,
  setMenu as setDashboardMenu,
  setMessages as setDashboardMessages,
  setProfile as setDashboardProfile,
  setSettings as setDashboardSettings,
  setUsers as setDashboardUsers
} from '@redux/reducers/project/breezy/dashboard';
import {useDispatch, useSelector} from '@redux/hooks';

type UseDashboard = {
  menu: Menu;
  messages: Messages;
  users: Users;
  profile: Profile;
  settings: Settings;
  forceLogout: ForceLogout;
  setMenu: (menu: Menu) => void;
  setMessages: (messages: Messages) => void;
  setUsers: (users: Users) => void;
  setProfile: (profile: Profile) => void;
  setSettings: (settings: Settings) => void;
  setForceLogout: (forceLogout: ForceLogout) => void;
};

const useDashboard = (): UseDashboard => {
  const dispatch = useDispatch();

  const setMenu = (menu: Menu): void => {
    dispatch(setDashboardMenu(menu));
  };

  const setMessages = (messages: Messages): void => {
    dispatch(setDashboardMessages(messages));
  };

  const setUsers = (users: Users): void => {
    dispatch(setDashboardUsers(users));
  };

  const setProfile = (profile: Profile): void => {
    dispatch(setDashboardProfile(profile));
  };

  const setSettings = (settings: Settings): void => {
    dispatch(setDashboardSettings(settings));
  };

  const setForceLogout = (forceLogout: ForceLogout): void => {
    dispatch(setDashboardForceLogout(forceLogout));
  };

  return {
    menu: useSelector((state) => state.project.breezy.dashboard.menu),
    messages: useSelector((state) => state.project.breezy.dashboard.messages),
    users: useSelector((state) => state.project.breezy.dashboard.users),
    profile: useSelector((state) => state.project.breezy.dashboard.profile),
    settings: useSelector((state) => state.project.breezy.dashboard.settings),
    forceLogout: useSelector(
      (state) => state.project.breezy.dashboard.forceLogout
    ),
    setMenu: setMenu,
    setMessages: setMessages,
    setUsers: setUsers,
    setProfile: setProfile,
    setSettings: setSettings,
    setForceLogout: setForceLogout
  };
};

export type {UseDashboard};
export default useDashboard;
