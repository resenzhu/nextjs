'use client';

import useHome from '@hooks/project/breezy/use-home';

type RetryProps = {
  label: string;
};

const Retry = ({label}: RetryProps): JSX.Element => {
  const {users, setUsers} = useHome();

  const handleRetryFetch = (): void => {
    setUsers({
      ...users,
      fetching: true
    });
  };

  return (
    <button
      className='rounded-lg bg-purple-500 px-5 py-2 font-semibold text-white duration-150 hover:bg-purple-600'
      type='button'
      onClick={(): void => handleRetryFetch()}
    >
      {label}
    </button>
  );
};

export type {RetryProps};
export default Retry;
