import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from './../../utils/persist';
import mainReducer from '@redux/reducers/main';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  main: persistReducer(createPersistConfig({key: 'main'}), mainReducer)
});

export default combinedReducers;
