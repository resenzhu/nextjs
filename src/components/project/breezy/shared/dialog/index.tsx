'use client';

import {
  TDialog,
  TDialogBackdrop,
  TDialogCancel,
  TDialogPanel
} from '@components/project/breezy/shared/dialog/transition';
import {Dialog as ReactDialog} from '@headlessui/react';

type DialogProps = {
  open: boolean;
  label: {
    title: string;
    subtitle: string;
    confirm: string;
    cancel?: string;
  };
  onConfirm: (...args: any[]) => any;
  onClose?: (...args: any[]) => any;
};

const Dialog = ({
  open,
  label,
  onConfirm,
  onClose
}: DialogProps): JSX.Element => (
  <TDialog show={open}>
    <ReactDialog onClose={onClose ?? onConfirm}>
      <TDialogBackdrop>
        <div className='fixed left-0 top-0 h-full w-full bg-black'></div>
      </TDialogBackdrop>
      <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center'>
        <TDialogPanel>
          <ReactDialog.Panel className='max-w-xs space-y-4 rounded-2xl bg-white px-6 py-4'>
            <ReactDialog.Title className='text-xl font-bold'>
              {label.title}
            </ReactDialog.Title>
            <div className='text-gray-700'>{label.subtitle}</div>
            <div
              className={`flex ${
                label.cancel === undefined ? 'justify-end' : 'justify-between'
              }`}
            >
              <TDialogCancel show={label.cancel !== undefined}>
                <button
                  className='font-bold text-purple-600'
                  type='button'
                  onClick={onClose}
                >
                  {label.cancel}
                </button>
              </TDialogCancel>
              <button
                className='font-bold text-purple-600'
                type='button'
                onClick={onConfirm}
              >
                {label.confirm}
              </button>
            </div>
          </ReactDialog.Panel>
        </TDialogPanel>
      </div>
    </ReactDialog>
  </TDialog>
);

export type {DialogProps};
export default Dialog;
