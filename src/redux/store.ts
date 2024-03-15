import {type Middleware, type Tuple, configureStore} from '@reduxjs/toolkit';
import type {GetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {createPersistConfig} from '@utils/persist';
import {persistReducer} from 'redux-persist';
import reducers from '@redux/reducers';

const persistedReducer = persistReducer(
  createPersistConfig({key: 'root'}),
  reducers
);

const middleware = (
  getDefaultMiddleware: GetDefaultMiddleware
): Tuple<Middleware[]> =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true
    }
  });

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
