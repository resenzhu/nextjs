'use client';

import useHome from '@hooks/main/use-home';

const Explore = (): JSX.Element => {
  const {explore, setExplore} = useHome();

  const handleToggleExplore = (show: boolean): void => {
    if (show !== explore) {
      setExplore(show);
    }
  };

  return (
    <button
      className='border-2 border-cyan-600 py-2 font-bold tracking-wider text-cyan-600 duration-150 hover:bg-cyan-600 hover:text-white active:bg-cyan-700'
      type='button'
      onClick={(): void => handleToggleExplore(true)}
    >
      EXPLORE
    </button>
  );
};

export default Explore;
