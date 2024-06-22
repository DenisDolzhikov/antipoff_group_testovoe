import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../api/authApi";
import type { RootState } from "../intex";

type AuthState = {
  user: User | null;
  // token: string | null;
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null} as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user },
      } : PayloadAction<{user: User}>,
    ) => {
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

// const slice = createSlice({
//   name: 'auth',
//   initialState: { user: null, token: null} as AuthState,
//   reducers: {
//     setCredentials: (
//       state,
//       {
//         payload: { user, token },
//       } : PayloadAction<{user: User, token: string}>,
//     ) => {
//       state.user = user;
//       state.token = token;
//     },
//   },
// });

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   first_name: string;
//   email: string;
// }

// interface UserState {
//   user: User | null;
//   isLoggedIn: boolean;
//   // loading: boolean;            // Пригодится для сетевых запросов, могу сделать реализацию с чанками и бекендом
//   // error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   isLoggedIn: false,
//   // loading: false,
//   // error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     signin: (state, action: PayloadAction<User>) => {
//       // state.user.userName = action.payload.userName;
//       // state.user.email = action.payload.email;
//       // state.isLoggedIn = true;
//       state.isLoggedIn = true;
//       state.user = action.payload;

//       // Можем добавить переменную isLoggedIn isLoggedIn в localStorage или юзать redux-persist
//     },
//     signout: () => initialState,
//     // singOut(state) {
//     //   state.user.userName = 'No name';
//     //   state.user.email = 'No email';
//     //   state.isLoggedIn = false;
//     // }
//   }
// });

// export const { signin, signout } = authSlice.actions;
// export default authSlice.reducer;