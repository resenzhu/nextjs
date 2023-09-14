import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import homeReducer from '@redux/reducers/project/breezy/home';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  home: persistReducer(createPersistConfig({key: 'home'}), homeReducer)
});

export default combinedReducers;
