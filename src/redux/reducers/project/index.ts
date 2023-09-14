import breezyReducer from '@redux/reducers/project/breezy';
import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  breezy: persistReducer(createPersistConfig({key: 'breezy'}), breezyReducer)
});

export default combinedReducers;
