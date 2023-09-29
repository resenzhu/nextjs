'use client';

import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type ExploreProps = {
  label: string;
};

const Explore = ({label}: ExploreProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleProfile = (show: boolean): void => {
    if (section.profile !== show) {
      setSection({
        ...section,
        profile: show
      });
    }
  };

  return (
    <>
      {viewport.width < 768 && (
        <button
          className='border-2 border-cyan-600 py-2 font-bold tracking-wider text-cyan-600 duration-150 hover:bg-cyan-600 hover:text-white active:bg-cyan-700'
          type='button'
          onClick={(): void => handleToggleProfile(false)}
        >
          {label}
        </button>
      )}
    </>
  );
};

export type {ExploreProps};
export default Explore;
