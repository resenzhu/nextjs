import {combineReducers} from '@reduxjs/toolkit';
import contactReducer from '@redux/reducers/main/contact';
import {createPersistConfig} from '@utils/persist';
import homeReducer from '@redux/reducers/main/home';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  home: persistReducer(createPersistConfig({key: 'home'}), homeReducer),
  contact: persistReducer(createPersistConfig({key: 'contact'}), contactReducer)
});

export default combinedReducers;
