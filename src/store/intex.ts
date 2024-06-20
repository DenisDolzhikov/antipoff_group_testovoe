import { combineReducers, configureStore, compose } from "@reduxjs/toolkit";
// import authReducer from './slices/authSlice';
import { authApi } from "./api/authApi";
import { usersListApi } from "./api/usersListApi"; 
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  [usersListApi.reducerPath]: usersListApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});


const store = configureStore({
  reducer: rootReducer,
  middleware: 
    (getDefaultMiddleware) => 
      getDefaultMiddleware()
        .concat([
                  authApi.middleware,
                  usersListApi.middleware,
                ]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;