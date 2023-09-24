'use client';

import {type ReactNode, useEffect, useRef, useState} from 'react';
import {T, TBackdrop, TSidenav} from '@components/main/navbar/transition';
import {faEllipsisV, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useApp from '@hooks/main/use-app';

type NavProps = {
  children: ReactNode;
};

const Nav = ({children}: NavProps): JSX.Element => {
  const sidebar = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const {sidenav, viewport, setSidenav} = useApp();
  const {removeEventListener} = window;

  const handleToggleSidenav = (show: boolean): void => {
    if (show !== sidenav) {
      setSidenav(show);
    }
  };

  const handleHideSidenav = (event: MouseEvent): void => {
    if (sidebar.current && !sidebar.current.contains(event.target as Node)) {
      setSidenav(false);
    }
  };

  useEffect((): (() => void) => {
    if (!rendered) {
      setRendered(true);
    }
    return (): void => {
      removeEventListener('mousedown', handleHideSidenav);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      addEventListener('mousedown', handleHideSidenav);
    }
  }, [rendered]);

  return (
    <>
      {viewport.width < 768 && (
        <>
          <button
            className='flex'
            type='button'
            onClick={(): void => handleToggleSidenav(true)}
          >
            <FontAwesomeIcon
              className='w-6 text-2xl text-gray-500'
              icon={faEllipsisV}
            />
          </button>
          <div className='fixed'>
            <T>
              <TBackdrop>
                <div className='fixed left-0 top-0 h-screen w-screen bg-black'></div>
              </TBackdrop>
              <TSidenav>
                <div
                  className='fixed right-0 top-0 h-screen w-3/5 bg-white'
                  ref={sidebar}
                >
                  <div className='mx-6 flex h-full py-6'>
                    <div className='flex flex-1 flex-col space-y-5'>
                      {children}
                    </div>
                    <div className='pt-1'>
                      <button
                        type='button'
                        onClick={(): void => handleToggleSidenav(false)}
                      >
                        <FontAwesomeIcon
                          className='text-2xl text-gray-500 duration-150 hover:text-red-500'
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </TSidenav>
            </T>
          </div>
        </>
      )}
      {viewport.width >= 768 && (
        <div className='space-x-6 md:space-x-7 lg:space-x-8'>{children}</div>
      )}
    </>
  );
};

export type {NavProps};
export default Nav;
