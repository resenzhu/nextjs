import {faMessage, faUserCircle, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Navbar = (): JSX.Element => (
  <div className='fixed bottom-0 flex w-screen justify-evenly border-t-2 bg-white shadow-sm'>
    <div className='grid flex-1 place-content-center border-t-4 border-t-purple-500 py-4 text-purple-500 duration-150'>
      <FontAwesomeIcon
        className='cursor-pointer text-xl md:text-lg'
        icon={faMessage}
      />
    </div>
    <div className='grid flex-1 place-content-center py-4 text-gray-500 duration-150 md:flex-none'>
      <FontAwesomeIcon
        className='cursor-pointer text-xl hover:text-purple-500 md:text-lg'
        icon={faUserFriends}
      />
    </div>
    <div className='grid flex-1 place-content-center py-4 text-gray-500 duration-150 md:flex-none'>
      <FontAwesomeIcon
        className='cursor-pointer text-2xl hover:text-purple-500 md:text-xl'
        icon={faUserCircle}
      />
    </div>
  </div>
);

export default Navbar;
