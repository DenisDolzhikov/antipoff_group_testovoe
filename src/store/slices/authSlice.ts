import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  userName: string;
  email: string;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  // loading: boolean;            // Пригодится для сетевых запросов, могу сделать реализацию с чанками и бекендом
  // error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  // loading: false,
  // error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<User>) => {
      // state.user.userName = action.payload.userName;
      // state.user.email = action.payload.email;
      // state.isLoggedIn = true;
      state.isLoggedIn = true;
      state.user = action.payload;

      // Можем добавить переменную isLoggedIn isLoggedIn в localStorage или юзать redux-persist
    },
    signout: () => initialState,
    // singOut(state) {
    //   state.user.userName = 'No name';
    //   state.user.email = 'No email';
    //   state.isLoggedIn = false;
    // }
  }
});

// export const { signUp } = authSlice.actions;
export default authSlice.reducer;