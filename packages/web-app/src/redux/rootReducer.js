import {combineReducers} from 'redux';
import storage from "redux-persist/lib/storage"
import {apiEcommerceApp} from './apiEcommerceApp';

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
}

const rootReducer = combineReducers({
  [apiEcommerceApp.reducerPath]: apiEcommerceApp.reducer
});

export { rootPersistConfig, rootReducer };
