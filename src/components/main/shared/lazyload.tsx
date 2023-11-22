'use client';

import ReactLazyLoad from 'react-lazy-load';
import type {ReactNode} from 'react';

type LazyLoadProps = {
  offset?: number;
  children: ReactNode;
};

const LazyLoad = ({offset = -150, children}: LazyLoadProps): JSX.Element => (
  <ReactLazyLoad offset={offset}>{children}</ReactLazyLoad>
);

export type {LazyLoadProps};
export default LazyLoad;
