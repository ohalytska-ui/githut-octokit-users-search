import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { Octokit } from '@octokit/core';
import { HttpMethod } from '@/models';

// Initialize Octokit with GitHub auth token
const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
});

// Define a custom base query that uses Octokit for making requests
export const octokitBaseQuery: BaseQueryFn<
  { url: string; method?: string; headers?: Record<string, string>; body?: any }, // Request arguments
  unknown, // Response type
  unknown // Error type
> = async ({ url, method = HttpMethod.GET, headers, body }) => {
  try {
    const response = await octokit.request({
      method,
      url,
      headers: {
        ...headers,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      data: body,
    });

    // Return the data as RTK Query expects
    return { data: response.data };
  } catch (error: any) {
    return {
      error: {
        status: error.status,
        data: error.response?.data || error.message,
      },
    };
  }
};
