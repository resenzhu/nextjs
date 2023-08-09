'use client';

import type {ReactNode} from 'react';
import SharedLazyLoad from 'react-lazy-load';

type LazyLoadProps = {
  offset?: number;
  children: ReactNode;
};

const LazyLoad = ({offset = -150, children}: LazyLoadProps): JSX.Element => (
  <SharedLazyLoad offset={offset}>{children}</SharedLazyLoad>
);

export type {LazyLoadProps};
export default LazyLoad;
