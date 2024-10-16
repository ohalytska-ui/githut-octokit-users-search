import { createApi } from '@reduxjs/toolkit/query/react';

import { HttpMethod, User, UserSearchResponse } from '../models';
import { octokitBaseQuery } from '../helpers';

// Define our API slice object
export const apiSlice = createApi({
  reducerPath: 'githubApi',
  // Handle work with Octokit lib
  baseQuery: octokitBaseQuery,
  // Track data changes while refetching
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
    // Search by user name + paggination
    searchUsers: builder.query<UserSearchResponse, { username: string; page: number }>({
      query: ({ username, page }) => ({
        url: `/search/users?q=${username}&page=${page}&per_page=30`,
        method: HttpMethod.GET,
      }),
    }),
    // Fetch user by username
    getUserDetails: builder.query<User, string>({
      query: (username) => ({
        url: `/users/${username}`,
        method: HttpMethod.GET,
      }),
    }),
    // Fetch user followers
    getUserFollowers: builder.query<User[], string>({
      query: (url) => ({
        url: url,
        method: HttpMethod.GET,
      }),
    }),
    // Fetch user following
    getUserFollowing: builder.query<User[], string>({
      query: (url) => ({
        url: url,
        method: HttpMethod.GET,
      }),
    }),
  }),
});

// Export the auto-generated hook for all query endpoints
export const {
  useGetUsersQuery,
  useGetUserDetailsQuery,
  useSearchUsersQuery,
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
} = apiSlice;
