import {combineReducers} from 'redux';
import storage from "redux-persist/lib/storage"
import {apiEcommerce} from './apiEcommerce';

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
}

const rootReducer = combineReducers({
  [apiEcommerce.reducerPath]: apiEcommerce.reducer
});

export { rootPersistConfig, rootReducer };
