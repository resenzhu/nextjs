'use client';

import {ReactNode} from 'react';
import useHome from '@hooks/main/use-home';

type HomeProps = {
  className?: string;
  children: ReactNode;
};

const Home = ({className, children}: HomeProps): JSX.Element => {
  const {explore, setExplore} = useHome();

  const handleToggleExplore = (show: boolean): void => {
    if (show !== explore) {
      setExplore(show);
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
