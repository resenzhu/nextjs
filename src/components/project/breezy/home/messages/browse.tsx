'use client';

import useHome from '@hooks/project/breezy/use-home';

type BrowseProps = {
  label: string;
};

const Browse = ({label}: BrowseProps): JSX.Element => {
  const {messages, users, setMessages, setUsers} = useHome();

  const handleToggleUsers = (show: boolean): void => {
    if (users.show !== show) {
      setMessages({
        ...messages,
        show: !show
      });
      setUsers({
        ...users,
        show: show
      });
    }
  };

  return (
    <button
      className='rounded-lg bg-purple-500 px-5 py-2 font-semibold text-white duration-150 hover:bg-purple-600'
      type='button'
      onClick={(): void => handleToggleUsers(true)}
    >
      {label}
    </button>
  );
};

export type {BrowseProps};
export default Browse;
