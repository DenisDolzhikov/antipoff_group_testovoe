import { combineReducers, configureStore, compose } from "@reduxjs/toolkit";
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
// import authReducer from './slices/authSlice';
import { authApi } from "./api/authApi";
import { usersListApi } from "./api/usersListApi"; 
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['authSlice'],
}

const rootReducer = combineReducers({
  auth: authReducer,
  [usersListApi.reducerPath]: usersListApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: 
    (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
      })
        .concat([
                  authApi.middleware,
                  usersListApi.middleware,
                ]),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;