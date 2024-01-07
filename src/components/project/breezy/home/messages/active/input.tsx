import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/free-solid-svg-icons';

type InputProps = {
  placeholder: string;
  sendIcon: IconDefinition;
};

const Input = ({placeholder, sendIcon}: InputProps): JSX.Element => (
  <form className='mx-4 flex items-center justify-between space-x-3 py-3'>
    <textarea
      className='w-full flex-1 resize-none bg-gray-50 px-3 py-2 outline-0'
      placeholder={placeholder}
      rows={1}
    />
    <button
      className='rounded-full bg-purple-500 p-1 duration-150 hover:bg-purple-600 disabled:bg-gray-300'
      type='submit'
    >
      <FontAwesomeIcon
        className='w-6 text-white'
        icon={sendIcon}
      />
    </button>
  </form>
);

export type {InputProps};
export default Input;
