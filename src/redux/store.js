import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import contactReducer from './Contact/contacts-reducer';
// import authSlice from './Auth/Auth-slice';
import moviesSlice from './movies/movies-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const moviesPersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

const store = configureStore({
  reducer: {
    movies: persistReducer(moviesPersistConfig, moviesSlice),
    // contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };