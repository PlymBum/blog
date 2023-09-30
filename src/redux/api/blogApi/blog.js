import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://blog.kata.academy/api'
// const BASE_URL = 'https://api.realworld.io/api'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['posts', 'post'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (offset) => ({
        url: `/articles?limit=20&offset=${offset}`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
      providesTags: ['posts'],
    }),
    getArticleBySlug: builder.query({
      query: (slug) => ({
        url: `/articles/${slug}`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
      providesTags: ['post'],
    }),
    createArticle: builder.mutation({
      query: (data) => ({
        url: '/articles',
        method: 'Post',
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        body: {
          article: {
            ...data,
          },
        },
      }),
      invalidatesTags: ['posts'],
    }),
    updateArticle: builder.mutation({
      query: (payload) => ({
        url: `/articles/${payload.slug}`,
        method: 'Put',
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        body: {
          article: {
            ...payload.body,
          },
        },
      }),
      invalidatesTags: ['post', 'posts'],
    }),
    deleteArticle: builder.mutation({
      query: (slug) => ({
        url: `/articles/${slug}`,
        method: 'Delete',
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['posts'],
    }),
    toogleFavoriteArticle: builder.mutation({
      query: (payload) => ({
        url: `/articles/${payload.slug}/favorite`,
        method: `${payload.favorite ? 'Post' : 'Delete'}`,
        headers: {
          'content-type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['posts', 'post'],
    }),
  }),
})

export const {
  useGetArticlesQuery,
  useGetArticleBySlugQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useToogleFavoriteArticleMutation,
} = blogApi
