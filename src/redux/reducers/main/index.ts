import {combineReducers} from '@reduxjs/toolkit';
import contactReducer from '@redux/reducers/main/contact';
import {createPersistConfig} from '@utils/persist';
import homeReducer from '@redux/reducers/main/home';
import navbarReducer from '@redux/reducers/main/navbar';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  navbar: persistReducer(createPersistConfig({key: 'navbar'}), navbarReducer),
  home: persistReducer(createPersistConfig({key: 'home'}), homeReducer),
  contact: persistReducer(createPersistConfig({key: 'contact'}), contactReducer)
});

export default combinedReducers;
