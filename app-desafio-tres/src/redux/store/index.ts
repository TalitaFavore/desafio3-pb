import { legacy_createStore as createStore, applyMiddleware, Store } from 'redux';
import {thunk} from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { RootState } from '../reducers';
import { RootAction } from '../types/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer<any, RootAction>(persistConfig, rootReducer as any);

const store: Store<Partial<RootState>, RootAction> & { dispatch: unknown } = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

export { store, persistor };
