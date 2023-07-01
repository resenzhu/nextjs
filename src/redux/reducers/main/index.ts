import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import navbarReducer from '@redux/reducers/main/navbar';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  navbar: persistReducer(createPersistConfig({key: 'navbar'}), navbarReducer)
});

export default combinedReducers;
