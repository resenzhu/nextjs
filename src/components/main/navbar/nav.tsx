'use client';

import {AnimatePresence, motion} from 'framer-motion';
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
      <AnimatePresence>
        {showSidenav && (
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
                    onClick={(): void => handleToggleSidenav(!showSidenav)}
                  >
                    <FontAwesomeIcon
                      className='text-2xl text-gray-500 hover:text-red-500'
                      icon={faXmark}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export type {NavProps};
export default Nav;
