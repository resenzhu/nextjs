'use client';

import {redirect} from 'next/navigation';
import {useEffect} from 'react';

const NotFound = (): void => {
  useEffect((): void => {
    redirect('/');
  }, []);
};

export default NotFound;
