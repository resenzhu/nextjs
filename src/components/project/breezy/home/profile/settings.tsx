'use client';

import {faAngleRight, faCog} from '@fortawesome/free-solid-svg-icons';
import {Button} from '@components/project/breezy/shared';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type SettingsProps = {
  label: string;
};

const Settings = ({label}: SettingsProps): JSX.Element => {
  const {settings, setSettings} = useDashboard();

  const handleToggleSettings = (show: boolean): void => {
    if (settings.show !== show) {
      setSettings({
        ...settings,
        show: show
      });
    }
  };

  return (
    <Button
      style='profile'
      onClick={(): void => handleToggleSettings(true)}
    >
      <div className='text-center'>
        <FontAwesomeIcon icon={faCog} />
      </div>
      <span className='flex-1 text-start text-lg font-semibold'>{label}</span>
      <div className='text-center'>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </Button>
  );
};

export type {SettingsProps};
export default Settings;
