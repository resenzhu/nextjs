'use client';

import {Button, Dialog} from '@components/project/breezy/shared';
import {
  faAngleRight,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {breezySocket} from '@utils/socket';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type Label = {
  settings: string;
  logout: string;
  dialog: {
    logout: {
      title: string;
      subtitle: string;
      cancel: string;
      confirm: string;
    };
  };
};

type MenuProps = {
  label: Label;
};

type LogoutRes = {
  success: boolean;
  error: {
    code: number;
    message: string;
  };
  data: {};
};

const Menu = ({label}: MenuProps): JSX.Element => {
  const {profile, settings, setProfile, setSettings} = useDashboard();

  const handleToggleSettings = (show: boolean): void => {
    if (settings.show !== show) {
      setSettings({
        ...settings,
        show: show
      });
    }
  };

  const handleToggleConfirmLogout = (show: boolean): void => {
    if (profile.confirmLogout !== show) {
      setProfile({
        ...profile,
        confirmLogout: show
      });
    }
  };

  const handleLogout = (): void => {
    breezySocket
      .timeout(60000)
      .emit('logout', (socketError: Error, response: LogoutRes): void => {
        console.log(response);
      });
  };

  return (
    <>
      <Button
        style='profile'
        onClick={(): void => handleToggleSettings(true)}
      >
        <div className='text-center'>
          <FontAwesomeIcon icon={faCog} />
        </div>
        <span className='flex-1 text-start text-lg font-semibold'>
          {label.settings}
        </span>
        <div className='text-center'>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </Button>
      <Button
        style='profile'
        onClick={(): void => handleToggleConfirmLogout(true)}
      >
        <div className='text-center'>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
        <span className='text-lg font-semibold'>{label.logout}</span>
      </Button>
      <Dialog
        open={profile.confirmLogout}
        label={{
          title: label.dialog.logout.title,
          subtitle: label.dialog.logout.subtitle,
          cancel: label.dialog.logout.cancel,
          confirm: label.dialog.logout.confirm
        }}
        onClose={(): void => handleToggleConfirmLogout(false)}
        onConfirm={(): void => handleLogout()}
      />
    </>
  );
};

export type {Label, MenuProps};
export default Menu;
