'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {ReactNode} from 'react';
import useHome from '@hooks/main/use-home';

type LandingPageProps = {
  children: ReactNode;
};

const LandingPage = ({children}: LandingPageProps): JSX.Element => {
  const {explore} = useHome();

  return (
    <AnimatePresence initial={false}>
      {!explore && (
        <motion.div
          className='h-full'
          key='landingPage'
          initial={{opacity: 0, height: 0}}
          animate={{opacity: 1, height: '100%', transition: {duration: 0.5}}}
          exit={{opacity: 0, height: 0, transition: {duration: 0.5}}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export type {LandingPageProps};
export default LandingPage;
