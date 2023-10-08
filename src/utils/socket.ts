import {Manager} from 'socket.io-client';
import cookie from 'js-cookie';

const socketManager = new Manager(process.env.NEXT_PUBLIC_APP_SOCKET, {
  transports: ['websocket', 'polling'],
  rejectUnauthorized: process.env.NODE_ENV === 'production',
  autoConnect: false
});

const mainSocket = socketManager.socket('/main');
const breezySocket = socketManager.socket('/project/breezy', {
  auth: {
    token: cookie.get(
      process.env.NODE_ENV === 'production' ? '__Secure-BZ' : 'BZ'
    )
  }
});

export {mainSocket, breezySocket};
