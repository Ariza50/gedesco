import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import {rootPersistConfig, rootReducer} from './rootReducer';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
});

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, useSelector, useDispatch }
