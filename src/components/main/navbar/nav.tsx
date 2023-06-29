import {faEllipsisVertical, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {ReactNode} from 'react';

type NavProps = {
  children: ReactNode;
};

const Nav = ({children}: NavProps): JSX.Element => (
  <>
    <button
      className='flex'
      type='button'
    >
      <FontAwesomeIcon
        className='w-6 text-2xl text-gray-500'
        icon={faEllipsisVertical}
      />
    </button>
    <div className='fixed left-0 top-0 h-screen w-screen bg-black opacity-40'></div>
    <div className='fixed right-0 top-0 h-screen w-3/5 bg-white'>
      <div className='mx-6 flex h-full py-6'>
        <div className='flex flex-1 flex-col space-y-5'>{children}</div>
        <div>
          <button
            className='align-sub'
            type='button'
          >
            <FontAwesomeIcon
              className='text-2xl text-gray-500 hover:text-red-500'
              icon={faXmark}
            />
          </button>
        </div>
      </div>
    </div>
  </>
);

export type {NavProps};
export default Nav;
