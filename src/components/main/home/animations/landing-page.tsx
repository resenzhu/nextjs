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
          exit={{opacity: 0, transition: {duration: 0.15}}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export type {LandingPageProps};
export default LandingPage;
