'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import useHome from '@hooks/project/breezy/use-home';

type NavMenuProps = {
  name: string;
  icon: IconDefinition;
};

const NavMenu = ({name, icon}: NavMenuProps): JSX.Element => {
  const {
    messages,
    users,
    profile,
    setMessages: _setMessages, // eslint-disable-line
    setUsers: _setUsers, // eslint-disable-line
    setProfile: _setProfile // eslint-disable-line
  } = useHome();
  const {keys} = Object;

  const handleSelectMenu = (menuName: string): void => {
    const menuMap = {
      messages: messages,
      users: users,
      profile: profile
    };
    const previousMenu =
      keys(menuMap).find(
        (menu): boolean => menuMap[menu as keyof typeof menuMap].show
      ) ?? 'messages';
    const nextMenu = menuName as keyof typeof menuMap;
    if (nextMenu !== previousMenu) {
      // eslint-disable-next-line
      eval(
        `_set${previousMenu.charAt(0).toUpperCase()}${previousMenu
          .slice(1)
          .toLowerCase()}({...${previousMenu}, show: false})`
      );
      // eslint-disable-next-line
      eval(
        `_set${nextMenu.charAt(0).toUpperCase()}${nextMenu
          .slice(1)
          .toLowerCase()}({...${nextMenu}, show: true})`
      );
    }
  };

  return (
    <div
      className={`grid flex-1 place-content-center border-t-4 py-4 md:flex-none md:border-r-4 md:border-t-0 md:px-3 md:py-5 ${
        eval(`${name}.show`) // eslint-disable-line
          ? 'border-t-purple-500 md:border-r-purple-500'
          : 'border-t-white md:border-r-white'
      }`}
    >
      <FontAwesomeIcon
        className={`cursor-pointer text-xl md:text-base ${
          eval(`${name}.show`) // eslint-disable-line
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
