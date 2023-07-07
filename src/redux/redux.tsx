'use client';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import type {ReactNode} from 'react';
import persistor from '@redux/persistor';
import store from '@redux/store';

type ReduxProps = {
  children: ReactNode;
};

const Redux = ({children}: ReduxProps): JSX.Element => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export type {ReduxProps};
export default Redux;
