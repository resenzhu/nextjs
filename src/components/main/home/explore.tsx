'use client';

import useHome from '@hooks/main/use-home';

const Explore = (): JSX.Element => {
  const {explore, setExplore} = useHome();

  const handleSetExplore = (show: boolean): void => {
    if (show !== explore) {
      setExplore(show);
    }
  };

  return (
    <button
      className='border-2 border-white py-2 font-bold tracking-wider duration-150 hover:border-blue-500 hover:bg-blue-500'
      type='button'
      onClick={(): void => handleSetExplore(true)}
    >
      EXPLORE
    </button>
  );
};

export default Explore;
