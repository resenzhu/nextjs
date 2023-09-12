'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Recaptcha from 'react-google-recaptcha';
import {faEye} from '@fortawesome/free-solid-svg-icons';

type FormProps = {
  label: {
    username: string;
    password: string;
    submit: string;
  };
};

const Form = ({label}: FormProps): JSX.Element => (
  <form className='mx-4 flex flex-col space-y-3 py-6'>
    <input
      className='rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
      type='text'
      placeholder={label.username}
    />
    <div className='flex'>
      <input
        className='flex-1 rounded-l-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100'
        type='password'
        placeholder={label.password}
      />
      <FontAwesomeIcon
        className='rounded-r-lg bg-purple-500 p-4 text-xl text-white'
        icon={faEye}
      />
    </div>
    <Recaptcha
      className='place-self-center'
      sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY_V2_CHECKBOX}
    />
    <button
      className='rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 hover:bg-purple-600 disabled:bg-gray-300'
      type='submit'
    >
      {label.submit}
    </button>
    <div className='break-words rounded-lg bg-red-500 py-2 text-center text-white'>
      Username is already taken.
    </div>
  </form>
);

export type {FormProps};
export default Form;
