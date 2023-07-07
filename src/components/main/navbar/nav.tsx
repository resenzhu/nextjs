'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {type ReactNode, useEffect, useRef, useState} from 'react';
import {faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useNavbar from '@hooks/main/use-navbar';

type NavProps = {
  children: ReactNode;
};

const Nav = ({children}: NavProps): JSX.Element => {
  const sidenav = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState<boolean>(false);
  const {showSidenav, setShowSidenav} = useNavbar();

  const handleToggleSidenav = (show: boolean): void => {
    if (show !== showSidenav) {
      setShowSidenav(show);
    }
  };

  const handleHideSidenav = (event: MouseEvent): void => {
    if (sidenav.current && !sidenav.current.contains(event.target as Node)) {
      setShowSidenav(false);
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
      <button
        className='flex'
        type='button'
        onClick={(): void => handleToggleSidenav(true)}
      >
        <FontAwesomeIcon
          className='w-6 text-2xl text-gray-500'
          icon={faEllipsisVertical}
        />
      </button>
      <AnimatePresence>
        {showSidenav && (
          <motion.div
            className='fixed right-0 top-0 h-screen bg-white'
            ref={sidenav}
            key='sidenav'
            initial={{width: 0}}
            animate={{width: '58%', transition: {duration: 0.15}}}
            exit={{width: 0, transition: {duration: 0.15}}}
          >
            <div className='mx-6 flex h-full py-6'>
              <div className='flex flex-1 flex-col space-y-5'>{children}</div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export type {NavProps};
export default Nav;
