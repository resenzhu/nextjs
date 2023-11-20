'use client';

import {
  faAngleRight,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import {Button, Dialog} from '@components/project/breezy/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type Label = {
  settings: string;
  logout: string;
};

type MenuProps = {
  label: Label;
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
        open={true}
        onClose={(): void => {}}
      />
    </>
  );
};

export type {Label, MenuProps};
export default Menu;
