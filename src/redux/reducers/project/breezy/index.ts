import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import homeReducer from '@redux/reducers/project/breezy/home';
import {persistReducer} from 'redux-persist';
import signUpReducer from '@redux/reducers/project/breezy/signup';

const combinedReducers = combineReducers({
  signup: persistReducer(createPersistConfig({key: 'signup'}), signUpReducer),
  home: persistReducer(createPersistConfig({key: 'home'}), homeReducer)
});

export default combinedReducers;
