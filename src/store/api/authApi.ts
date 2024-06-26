import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../intex";

// export interface User {
//   first_name: string;
//   last_name: string;
// };

export interface User {
  first_name: string;
  email: string;
}

export interface UserResponse {
  user: User;
  token: string;
};

export interface LoginRequest {
  username: string;
  password: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string}, void>({
      query: () => 'protected',
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = authApi;

// Дорабоать