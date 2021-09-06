import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import storageSession from 'redux-persist/lib/storage/session';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
   key: 'root',
   storage: storageSession,
   whitelist: ['user']
};

export const store = createStore(
   persistReducer(persistConfig, rootReducer)
);

export const persistor = persistStore(store);
