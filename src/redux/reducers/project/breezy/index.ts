import {combineReducers} from '@reduxjs/toolkit';
import {createPersistConfig} from '@utils/persist';
import dashboardReducer from '@redux/reducers/project/breezy/dashboard';
import loginReducer from '@redux/reducers/project/breezy/login';
import {persistReducer} from 'redux-persist';
import signUpReducer from '@redux/reducers/project/breezy/signup';

const combinedReducers = combineReducers({
  signup: persistReducer(createPersistConfig({key: 'signup'}), signUpReducer),
  login: persistReducer(createPersistConfig({key: 'login'}), loginReducer),
  dashboard: persistReducer(
    createPersistConfig({key: 'dashboard'}),
    dashboardReducer
  )
});

export default combinedReducers;
