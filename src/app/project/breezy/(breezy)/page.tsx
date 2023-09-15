import {
  faMessage,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import {Navbar} from '@components/project/breezy/home';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Breezy | Resen',
  description:
    'Connect with ease using Breezy. Enjoy fast and reliable chat, share moments, and connect with friends in a simple and enjoyable way.',
  url: '/project/breezy'
});

const Page = (): JSX.Element => (
  <div className='md:flex md:h-screen'>
    <Navbar>
      <Navbar.Menu
        name='chats'
        icon={faMessage}
      ></Navbar.Menu>
      <Navbar.Menu
        name='users'
        icon={faUserFriends}
      ></Navbar.Menu>
      <Navbar.Menu
        name='profile'
        icon={faUser}
      ></Navbar.Menu>
    </Navbar>
  </div>
);

export {metadata};
export default Page;
