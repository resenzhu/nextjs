import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Input = (): JSX.Element => (
  <form className='mx-4 flex items-center justify-between space-x-3 py-3'>
    <textarea
      className='w-full flex-1 resize-none bg-gray-50 px-3 py-2 outline-0'
      placeholder='Type a message'
      rows={1}
    />
    <button
      className='rounded-full bg-purple-500 p-1 duration-150 hover:bg-purple-600 disabled:bg-gray-300'
      type='submit'
    >
      <FontAwesomeIcon
        className='w-6 text-white'
        icon={faPaperPlane}
      />
    </button>
  </form>
);

export default Input;
