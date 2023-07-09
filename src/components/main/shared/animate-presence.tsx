'use client';

import {AnimatePresence as AnimateAppPresence} from 'framer-motion';
import {ReactNode} from 'react';

type AnimatePresenceProps = {
  children: ReactNode;
};

const AnimatePresence = ({children}: AnimatePresenceProps) => (
  <AnimateAppPresence>{children}</AnimateAppPresence>
);

export type {AnimatePresenceProps};
export default AnimatePresence;
