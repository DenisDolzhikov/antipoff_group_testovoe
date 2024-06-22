import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const usersListApi = createApi({
  reducerPath: 'usersListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/'}),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    listUsers: builder.query<ListResponse<User>, number | void>({
      query: (page = 1) => `users?page=${page}`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'Users', id: 'PARTIAL-LIST' }],
    }),
  }),
});

export const { useListUsersQuery } = usersListApi;