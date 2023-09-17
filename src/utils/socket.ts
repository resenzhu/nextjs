import {Manager} from 'socket.io-client';

const socketManager = new Manager(process.env.NEXT_PUBLIC_APP_SOCKET, {
  transports: ['websocket', 'polling'],
  rejectUnauthorized: process.env.NODE_ENV === 'production',
  autoConnect: false
});

export const mainSocket = socketManager.socket('/main');
export const breezySocket = socketManager.socket('/project/breezy');
