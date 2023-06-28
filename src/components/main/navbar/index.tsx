import Brand from '@components/main/navbar/brand';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
  logo: string;
  title: string;
};

const Navbar = ({logo, title}: NavbarProps): JSX.Element => (
  <nav className='border-b-2 bg-white'>
    <div className='mx-4 flex items-center justify-between py-4'>
      <Brand
        logo={logo}
        label={title}
      />
      <button className='flex'>
        <FontAwesomeIcon
          className='w-6 text-2xl text-gray-500'
          icon={faEllipsisVertical}
        />
      </button>
    </div>
  </nav>
);

export default Navbar;
