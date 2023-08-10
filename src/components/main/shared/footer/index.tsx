import Scroll from '@components/main/shared/footer/scroll';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';

const Footer = (): JSX.Element => (
  <footer className='bg-cyan-700'>
    <div className='mx-4 flex flex-col items-center py-4 text-white'>
      <Scroll icon={faArrowCircleUp} />
    </div>
  </footer>
);

export default Footer;
