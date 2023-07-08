import appReducer from '@redux/reducers/main/app';
import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import navbarReducer from '@redux/reducers/main/navbar';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  app: persistReducer(createPersistConfig({key: 'app'}), appReducer),
  navbar: persistReducer(createPersistConfig({key: 'navbar'}), navbarReducer)
});

export default combinedReducers;
