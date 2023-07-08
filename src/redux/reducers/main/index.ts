import appReducer from '@redux/reducers/main/app';
import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  app: persistReducer(createPersistConfig({key: 'app'}), appReducer)
});

export default combinedReducers;
