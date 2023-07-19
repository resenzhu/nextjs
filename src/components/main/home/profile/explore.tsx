'use client';

import useHome from '@hooks/main/use-home';

const Explore = (): JSX.Element => {
  const {section, setSection} = useHome();

  const handleToggleProfile = (show: boolean): void => {
    if (show !== section.profile) {
      setSection({
        ...section,
        profile: show
      });
    }
  };

  return (
    <button
      className='border-2 border-cyan-600 py-2 font-bold tracking-wider text-cyan-600 duration-150 hover:bg-cyan-600 hover:text-white active:bg-cyan-700'
      type='button'
      onClick={(): void => handleToggleProfile(false)}
    >
      EXPLORE
    </button>
  );
};

export default Explore;