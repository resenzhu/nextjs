'use client';

import {Dialog as ReactDialog} from '@headlessui/react';

type DialogProps = {
  open: boolean;
  onClose: (...args: any[]) => any;
};

const Dialog = ({open, onClose}: DialogProps): JSX.Element => (
  <ReactDialog
    open={open}
    onClose={onClose}
  >
    <ReactDialog.Panel className='bg-white'>DIALOG</ReactDialog.Panel>
  </ReactDialog>
);

export type {DialogProps};
export default Dialog;
