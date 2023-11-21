'use client';

import {Dialog as ReactDialog} from '@headlessui/react';
import {TDialog} from '@components/project/breezy/shared/dialog/transition';

type DialogProps = {
  open: boolean;
  onClose: (...args: any[]) => any;
};

const Dialog = ({open, onClose}: DialogProps): JSX.Element => {
  return (
    <TDialog show={open}>
      <ReactDialog onClose={onClose}>
        <ReactDialog.Panel className='bg-white'>DIALOG</ReactDialog.Panel>
      </ReactDialog>
    </TDialog>
  );
};

export type {DialogProps};
export default Dialog;
