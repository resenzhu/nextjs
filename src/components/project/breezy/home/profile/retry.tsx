'use client';

import {Button} from '@components/project/breezy/shared';
import useHome from '@hooks/project/breezy/use-home';

type RetryProps = {
  label: string;
};

const Retry = ({label}: RetryProps): JSX.Element => {
  const {profile, setProfile} = useHome();

  const handleRetryFetch = (): void => {
    if (!profile.fetching && !profile.fetched) {
      setProfile({
        ...profile,
        fetching: true
      });
    }
  };

  return <Button onClick={(): void => handleRetryFetch()}>{label}</Button>;
};

export type {RetryProps};
export default Retry;
