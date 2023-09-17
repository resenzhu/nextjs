import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {RecaptchaV2} from '@components/project/breezy/shared';
import {faEye} from '@fortawesome/free-solid-svg-icons';

type InputProps = {
  label: {
    username: string;
    password: string;
    submit: string;
  };
};

const Input = ({label}: InputProps): JSX.Element => (
  <form className='mx-4 flex flex-col space-y-3 py-6 md:py-5'>
    <input
      className='rounded-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs'
      type='text'
      placeholder={label.username}
    />
    <div className='flex'>
      <input
        className='flex-1 rounded-l-lg border-2 px-3 py-2 outline-0 disabled:bg-gray-100 md:text-xs'
        type='password'
        placeholder={label.password}
      />
      <FontAwesomeIcon
        className='rounded-r-lg bg-purple-500 p-4 text-xl text-white md:p-3 md:text-sm'
        icon={faEye}
      />
    </div>
    <RecaptchaV2 />
    <button
      className='rounded-lg bg-purple-500 py-2 text-lg font-semibold tracking-wide text-white duration-150 hover:bg-purple-600 disabled:bg-gray-300 md:text-sm'
      type='submit'
    >
      {label.submit}
    </button>
    <div className='break-words rounded-lg bg-red-500 p-2 text-center text-sm text-white md:text-xs'>
      Username is already taken.
    </div>
  </form>
);

export type {InputProps};
export default Input;
