/* eslint-disable import/prefer-default-export */
import { blogApi } from './blog'

const user = blogApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => ({
        url: '/user',
        headers: {
          'content-type': 'text/plain',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/users',
        method: 'Post',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/users/login',
        method: 'Post',
        body: data,
      }),
      invalidatesTags: ['post', 'posts'],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: '/user',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        method: 'Put',
        body: { user: { ...data } },
      }),
      invalidatesTags: ['post', 'posts'],
    }),
  }),
  overrideExisting: false,
})

export const { useGetUserInfoQuery, useRegisterUserMutation, useLoginUserMutation, useUpdateUserMutation } = user
