'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {type ReactNode, useEffect, useRef, useState} from 'react';
import {faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useApp from '@hooks/main/use-app';

type NavProps = {
  children: ReactNode;
};

const Nav = ({children}: NavProps): JSX.Element => {
  const sidebar = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const {viewport, sidenav, setSidenav} = useApp();

  const handleSetSidenav = (show: boolean): void => {
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
      window.removeEventListener('mousedown', handleHideSidenav);
    };
  }, []);

  useEffect((): void => {
    if (rendered) {
      window.addEventListener('mousedown', handleHideSidenav);
    }
  }, [rendered]);

  return (
    <>
      {viewport.width < 640 && (
        <button
          className='flex'
          type='button'
          onClick={(): void => handleSetSidenav(true)}
        >
          <FontAwesomeIcon
            className='w-6 text-2xl text-gray-500'
            icon={faEllipsisVertical}
          />
        </button>
      )}
      <AnimatePresence>
        {sidenav && viewport.width < 640 && (
          <>
            <motion.div
              className='fixed left-0 top-0 h-screen w-screen bg-black'
              key='backdrop'
              initial={{opacity: 0}}
              animate={{opacity: 0.4, transition: {duration: 0.15}}}
              exit={{opacity: 0, transition: {duration: 0.15}}}
            ></motion.div>
            <motion.div
              className='fixed right-0 top-0 h-screen bg-white'
              ref={sidebar}
              key='sidebar'
              initial={{width: 0}}
              animate={{width: '58%', transition: {duration: 0.15}}}
              exit={{width: 0, transition: {duration: 0.15}}}
            >
              <div className='mx-6 flex h-full py-6'>
                <div className='flex flex-1 flex-col space-y-5'>{children}</div>
                <div className='pt-1'>
                  <button
                    type='button'
                    onClick={(): void => handleSetSidenav(false)}
                  >
                    <FontAwesomeIcon
                      className='text-2xl text-gray-500 duration-150 hover:text-red-500'
                      icon={faXmark}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {viewport.width >= 640 && (
        <div className='space-x-6 md:space-x-7 lg:space-x-8'>{children}</div>
      )}
    </>
  );
};

export type {NavProps};
export default Nav;
