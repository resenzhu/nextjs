'use client';

import type {ReactNode} from 'react';
import {Tooltip as ReactTooltip} from 'react-tooltip';

type TooltipProps = {
  id: string;
  children: ReactNode;
};

const Tooltip = ({id, children}: TooltipProps): JSX.Element => (
  <>
    {children}
    <ReactTooltip
      className='rounded-lg bg-cyan-600 px-3 py-1 text-white'
      id={id}
      opacity={1}
      disableStyleInjection={true}
    />
  </>
);

export type {TooltipProps};
export default Tooltip;
