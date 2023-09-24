'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import type {Menu} from '@redux/reducers/project/breezy/home';
import useHome from '@hooks/project/breezy/use-home';

type NavMenuProps = {
  name: string;
  icon: IconDefinition;
};

const NavMenu = ({name, icon}: NavMenuProps): JSX.Element => {
  const {menu, setMenu} = useHome();
  const {keys} = Object;

  const handleSelectMenu = (menuName: string): void => {
    const newSelectedMenu = menuName as keyof Menu;
    const previousMenu = keys(menu).filter(
      (property): boolean => menu[property as keyof Menu]
    )[0] as keyof Menu;
    if (newSelectedMenu !== previousMenu) {
      setMenu({
        ...menu,
        [newSelectedMenu]: true,
        [previousMenu]: false
      });
    }
  };

  return (
    <div
      className={`grid flex-1 place-content-center border-t-4 py-4 md:flex-none md:border-r-4 md:border-t-0 md:px-3 md:py-5 ${
        menu[name as keyof Menu]
          ? 'border-t-purple-500 md:border-r-purple-500'
          : 'border-t-white md:border-r-white'
      }`}
    >
      <FontAwesomeIcon
        className={`cursor-pointer text-xl md:text-base ${
          menu[name as keyof Menu]
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
