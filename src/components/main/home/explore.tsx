'use client';

import useNavbar from '@hooks/main/use-navbar';

const Explore = (): JSX.Element => {
  const {showSidenav, setShowSidenav} = useNavbar();

  const handleToggleSidenav = (show: boolean) => {
    if (show !== showSidenav) {
      setShowSidenav(show);
    }
  };

  return (
    <button
      className='border-2 border-white py-2 font-bold tracking-wider duration-150 hover:border-blue-500 hover:bg-blue-500'
      type='button'
      onClick={(): void => handleToggleSidenav(true)}
    >
      EXPLORE
    </button>
  );
};

export default Explore;
