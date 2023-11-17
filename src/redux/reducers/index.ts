import appReducer from '@redux/reducers/app';
import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from './../../utils/persist';
import mainReducer from '@redux/reducers/main';
import {persistReducer} from 'redux-persist';
import projectReducer from '@redux/reducers/project';

const combinedReducers = combineReducers({
  app: persistReducer(createPersistConfig({key: 'app'}), appReducer),
  main: persistReducer(createPersistConfig({key: 'main'}), mainReducer),
  project: persistReducer(createPersistConfig({key: 'project'}), projectReducer)
});

export default combinedReducers;
