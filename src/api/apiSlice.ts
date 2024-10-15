import { createApi } from '@reduxjs/toolkit/query/react';

import { HttpMethod, User } from '../models';
import { octokitBaseQuery } from '../helpers';

// Define our API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  // Handle work with Octokit lib
  baseQuery: octokitBaseQuery,
  // track data changes while refetching
  tagTypes: ['Users'],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // Fetch all users
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: '/users',
        method: HttpMethod.GET,
      }),
    }),
    // Fetch user by ID
    getUser: builder.query<User, string>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

// Export the auto-generated hook for all query endpoints
export const { useGetUsersQuery, useGetUserQuery } = apiSlice;
