import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import storageSession from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
   key: 'root',
   storage: storageSession,
   whitelist: ['user']
};

export const store = createStore(
   persistReducer(persistConfig, rootReducer),
   applyMiddleware(thunk)
);

export const persistor = persistStore(store);
