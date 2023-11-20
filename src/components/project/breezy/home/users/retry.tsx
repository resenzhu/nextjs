'use client';

import {Button} from '@components/project/breezy/shared';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type RetryProps = {
  label: string;
};

const Retry = ({label}: RetryProps): JSX.Element => {
  const {users, setUsers} = useDashboard();

  const handleRetryFetch = (): void => {
    if (!users.fetching && !users.fetched) {
      setUsers({
        ...users,
        fetching: true
      });
    }
  };

  return <Button onClick={(): void => handleRetryFetch()}>{label}</Button>;
};

export type {RetryProps};
export default Retry;
