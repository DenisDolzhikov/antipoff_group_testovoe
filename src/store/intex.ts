import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice';
import { usersListApi } from "./api/usersListApi"; 

const rootReducer = combineReducers({
  auth: authReducer,
  [usersListApi.reducerPath]: usersListApi.reducer,
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersListApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;