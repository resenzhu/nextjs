'use client';

import {type ReactNode, useState} from 'react';
import {faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type NavProps = {
  children: ReactNode;
};

const Nav = ({children}: NavProps): JSX.Element => {
  const [showSidenav, setShowSidenav] = useState<boolean>(false);

  const handleToggleSidenav = (show: boolean): void => {
    if (show !== showSidenav) {
      setShowSidenav(show);
    }
  };

  return (
    <>
      <button
        className='flex'
        type='button'
        onClick={(): void => handleToggleSidenav(!showSidenav)}
      >
        <FontAwesomeIcon
          className='w-6 text-2xl text-gray-500'
          icon={faEllipsisVertical}
        />
      </button>
      {showSidenav && (
        <>
          <div className='fixed left-0 top-0 h-screen w-screen bg-black opacity-40'></div>
          <div className='fixed right-0 top-0 h-screen w-7/12 bg-white'>
            <div className='mx-6 flex h-full py-6'>
              <div className='flex flex-1 flex-col space-y-5'>{children}</div>
              <div className='pt-1'>
                <button
                  type='button'
                  onClick={(): void => handleToggleSidenav(!showSidenav)}
                >
                  <FontAwesomeIcon
                    className='text-2xl text-gray-500 hover:text-red-500'
                    icon={faXmark}
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export type {NavProps};
export default Nav;
