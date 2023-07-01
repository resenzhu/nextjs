import {persistStore} from 'redux-persist';
import store from '@redux/store';

const persistor = persistStore(store);

export default persistor;
