'use client';

import {type ReactNode, useEffect, useRef, useState} from 'react';
import {
  TNav,
  TNavBackdrop,
  TNavSideNav
} from '@components/main/navbar/nav/transition';
import {faEllipsisV, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useApp from '@hooks/app/use-app';
import useNavbar from '@hooks/main/use-navbar';

type NavProps = {
  children: ReactNode;
};

const Nav = ({children}: NavProps): JSX.Element => {
  const sideNav = useRef<HTMLDivElement>(null);
  const {viewport} = useApp();
  const {isSideNavOpen, setIsSideNavOpen} = useNavbar();
  const [rendered, setRendered] = useState<boolean>(false);

  const handleToggleSideNav = (open: boolean): void => {
    if (isSideNavOpen !== open) {
      setIsSideNavOpen(open);
    }
  };

  const handleHideSideNav = (event: MouseEvent): void => {
    if (sideNav.current && !sideNav.current.contains(event.target as Node)) {
      setIsSideNavOpen(false);
    }
  };

  useEffect((): void => {
    if (!rendered) {
      setRendered(true);
    }
  }, []);

  useEffect((): (() => void) => {
    if (rendered) {
      addEventListener('mousedown', handleHideSideNav);
    }
    return (): void => {
      removeEventListener('mousedown', handleHideSideNav);
    };
  }, [rendered]);

  return (
    <>
      {viewport.width < 768 && (
        <>
          <button
            className='flex'
            type='button'
            onClick={(): void => handleToggleSideNav(true)}
          >
            <FontAwesomeIcon
              className='w-6 text-2xl text-gray-500'
              icon={faEllipsisV}
            />
          </button>
          <div className='fixed'>
            <TNav>
              <div>
                <TNavBackdrop>
                  <div className='fixed left-0 top-0 h-screen w-screen bg-black opacity-60'></div>
                </TNavBackdrop>
                <TNavSideNav>
                  <div
                    className='fixed right-0 top-0 h-screen w-3/5 bg-white'
                    ref={sideNav}
                  >
                    <div className='mx-6 flex h-full py-6'>
                      <div className='flex flex-1 flex-col space-y-5'>
                        {children}
                      </div>
                      <div className='pt-1'>
                        <button
                          type='button'
                          onClick={(): void => handleToggleSideNav(false)}
                        >
                          <FontAwesomeIcon
                            className='text-2xl text-gray-500 duration-150 hover:text-red-500'
                            icon={faXmark}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </TNavSideNav>
              </div>
            </TNav>
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
