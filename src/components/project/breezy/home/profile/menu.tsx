'use client';

import {
  faAngleRight,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from '@components/project/breezy/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {TSettings} from '@components/project/breezy/home/profile/transition';
import useHome from '@hooks/project/breezy/use-home';

type Label = {
  settings: string;
  logout: string;
};

type MenuProps = {
  label: Label;
};

const Menu = ({label}: MenuProps): JSX.Element => {
  const {profile, setProfile} = useHome();

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
      <Button style='profile'>
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
      <TSettings>
        <Modal />
      </TSettings>
    </>
  );
};

export type {Label, MenuProps};
export default Menu;
