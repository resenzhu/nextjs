'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import useDashboard from '@hooks/project/breezy/use-dashboard';

type NavMenuProps = {
  name: string;
  icon: IconDefinition;
};

const NavMenu = ({name, icon}: NavMenuProps): JSX.Element => {
  const {menu, setMenu} = useDashboard();
  const {keys} = Object;

  const handleSelectMenu = (menuName: string): void => {
    const previousMenu = keys(menu).filter(
      (property): boolean => menu[property as keyof typeof menu]
    )[0] as keyof typeof menu;
    const nextMenu = menuName as keyof typeof menu;
    if (nextMenu !== previousMenu) {
      setMenu({
        ...menu,
        [previousMenu]: false,
        [nextMenu]: true
      });
    }
  };

  return (
    <div
      className={`grid flex-1 place-content-center border-t-4 py-4 md:flex-none md:border-r-4 md:border-t-0 md:px-3 md:py-5 ${
        menu[name as keyof typeof menu]
          ? 'border-t-purple-500 md:border-r-purple-500'
          : 'border-t-white md:border-r-white'
      }`}
    >
      <FontAwesomeIcon
        className={`cursor-pointer text-xl md:text-base ${
          menu[name as keyof typeof menu]
            ? 'text-purple-500'
            : 'text-gray-500 duration-150 hover:text-purple-500'
        }`}
        icon={icon}
        onClick={(): void => handleSelectMenu(name)}
      />
    </div>
  );
};

export type {NavMenuProps};
export default NavMenu;
