import {redirect} from 'next/navigation';

const NotFound = (): void => {
  redirect('/');
};

export default NotFound;
