'use client';

import type {ReactNode} from 'react';
import useApp from '@hooks/main/use-app';
import useHome from '@hooks/main/use-home';

type HomeProps = {
  className?: string;
  children: ReactNode;
};

const Home = ({className, children}: HomeProps): JSX.Element => {
  const {viewport} = useApp();
  const {section, setSection} = useHome();

  const handleToggleExplore = (show: boolean): void => {
    if (section.explore !== show) {
      setSection({
        ...section,
        explore: show
      });
    }
  };

  return (
    <>
      {viewport.width < 768 && (
        <button
          className={className}
          type='button'
          onClick={(): void => handleToggleExplore(false)}
        >
          {children}
        </button>
      )}
    </>
  );
};

export type {HomeProps};
export default Home;
