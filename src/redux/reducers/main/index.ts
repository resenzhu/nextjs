import appReducer from '@redux/reducers/main/app';
import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import homeReducer from '@redux/reducers/main/home';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  app: persistReducer(createPersistConfig({key: 'app'}), appReducer),
  home: persistReducer(createPersistConfig({key: 'home'}), homeReducer)
});

export default combinedReducers;
