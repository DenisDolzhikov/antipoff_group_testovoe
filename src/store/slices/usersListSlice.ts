// PS: Это попытка сделать пагинацию с помощью asyncThunk, выглядит нерационально, проще использовать RTK Query



// import { createSlice, PayloadAction, createAsyncThunk, UnknownAction } from '@reduxjs/toolkit';

// export const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string}>(
//   'users/fetchUsers',
//   async function(page: number = 1, { rejectWithValue }) {
//     const response = await fetch(`https://reqres.in/api/users?page=${page}`);

//     if (!response.ok) {
//       return rejectWithValue('Server error!');
//     }

//     const data = await response.json();

//     console.log(data);

//     return data;
//   }
// );

// // export const fetchUsers = createAsyncThunk<User[], undefined, { rejectValue: string}>(
// //   'users/fetchUsers',
// //   async function(_, { rejectWithValue }) {
// //     const response = await fetch(`https://reqres.in/api/users`);

// //     if (!response.ok) {
// //       return rejectWithValue('Server error!');
// //     }

// //     const data = await response.json();

// //     return data;
// //   }
// // );

// interface User {
//   id: number;
//   email: string;
//   first_name: string;
//   last_name: string;
//   avatar: string;
//   isLiked: boolean;
// }

// interface UsersList {
//   list: User[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UsersList = {
//   list: [],
//   loading: false,
//   error: null,
// };

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.list = action.payload;
//         state.loading = false;
//       })
//       .addMatcher(isError, (state, action: PayloadAction<string>) => {
//         state.error = action.payload;
//         state.loading = false;
//       })
//   }
// });

// function isError(action: UnknownAction) {
//   return action.type.endsWith('rejected');
// }

// export default usersSlice.reducer;