'use client';

import {Button} from '@components/main/shared';
import useApp from '@hooks/app/use-app';
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
        <Button
          style='transparent'
          onClick={(): void => handleToggleProfile(false)}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export type {ExploreProps};
export default Explore;
