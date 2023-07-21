import {Manager} from 'socket.io-client';

const socketManager = new Manager(process.env.APP_SERVER, {
  transports: ['websocket', 'polling'],
  rejectUnauthorized: process.env.NODE_ENV === 'production',
  autoConnect: false
});

export const mainSocket = socketManager.socket('/main');
