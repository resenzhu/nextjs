import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import homeReducer from '@redux/reducers/project/breezy/home';
import loginReducer from '@redux/reducers/project/breezy/login';
import {persistReducer} from 'redux-persist';
import signUpReducer from '@redux/reducers/project/breezy/signup';

const combinedReducers = combineReducers({
  signup: persistReducer(createPersistConfig({key: 'signup'}), signUpReducer),
  login: persistReducer(createPersistConfig({key: 'login'}), loginReducer),
  home: persistReducer(createPersistConfig({key: 'home'}), homeReducer)
});

export default combinedReducers;
