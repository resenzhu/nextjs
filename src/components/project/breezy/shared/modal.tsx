import type {MouseEventHandler} from 'react';

type ModalProps = {
  label: {
    title: string;
    subtitle: string;
    confirm: string;
    cancel: string;
  };
  onConfirm: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({label, onConfirm, onCancel}: ModalProps): JSX.Element => (
  <div className='fixed left-0 top-0 flex h-screen w-screen'>
    <div className='absolute h-full w-full bg-black opacity-60'></div>
    <div className='relative flex h-full w-full items-center justify-center'>
      <div className='bg-white p-4 space-y-2'>
        <div className='text-xl font-bold text-gray-700'>Log Out</div>
        <div className='text-gray-600'>Are you sure you want to log out?</div>
        <div>
          <button>CANCEL</button>
          <button>LOG OUT</button>
        </div>
      </div>
    </div>
  </div>
);

export type {ModalProps};
export default Modal;
