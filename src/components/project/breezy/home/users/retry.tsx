'use client';

import {Button} from '@components/project/breezy/shared';
import useHome from '@hooks/project/breezy/use-home';

type RetryProps = {
  label: string;
};

const Retry = ({label}: RetryProps): JSX.Element => {
  const {users, setUsers} = useHome();

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
