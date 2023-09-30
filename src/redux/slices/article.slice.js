import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  article: {},
}

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticle: ({ payload }) => {
      console.log(payload, 'SLICE')
      return { article: payload.article }
    },
    clearArticle: () => {
      return { article: {} }
    },
  },
})

export const { actions, reducer } = articleSlice
