import {
  Messages,
  Navbar,
  Profile,
  Users
} from '@components/project/breezy/home';
import {
  faMessage,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
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
        name='messages'
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
    <Messages
      empty={{
        message:
          'Welcome to Breezy! Connect with online users and experience the breezy conversations.',
        action: 'Browse Users'
      }}
    />
    <Users
      empty={{
        message:
          'No online users. Please create a new account on another browser or device to test the chat. Thank you!'
      }}
    />
    <Profile />
  </div>
);

export {metadata};
export default Page;
