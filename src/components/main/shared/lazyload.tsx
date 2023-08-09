'use client';

import type {ReactNode} from 'react';
import SharedLazyLoad from 'react-lazy-load';

type LazyLoadProps = {
  children: ReactNode;
};

const LazyLoad = ({children}: LazyLoadProps): JSX.Element => (
  <SharedLazyLoad>{children}</SharedLazyLoad>
);

export type {LazyLoadProps};
export default LazyLoad;
