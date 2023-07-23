'use client';

import type {ReactNode} from 'react';
import useHome from '@hooks/main/use-home';

type HomeProps = {
  className?: string;
  children: ReactNode;
};

const Home = ({className, children}: HomeProps): JSX.Element => {
  const {section, setSection} = useHome();

  const handleToggleExplore = (show: boolean): void => {
    if (show !== section.explore) {
      setSection({
        ...section,
        explore: show
      });
    }
  };

  return (
    <button
      className={className}
      type='button'
      onClick={(): void => handleToggleExplore(false)}
    >
      {children}
    </button>
  );
};

export type {HomeProps};
export default Home;
