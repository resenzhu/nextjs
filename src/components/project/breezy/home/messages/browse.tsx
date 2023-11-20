'use client';

import {Button} from '@components/project/breezy/shared';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type BrowseProps = {
  label: string;
};

const Browse = ({label}: BrowseProps): JSX.Element => {
  const {menu, setMenu} = useDashboard();

  const handleToggleUsers = (show: boolean): void => {
    if (menu.users !== show) {
      setMenu({
        ...menu,
        messages: !show,
        users: show
      });
    }
  };

  return <Button onClick={(): void => handleToggleUsers(true)}>{label}</Button>;
};

export type {BrowseProps};
export default Browse;
