import { createSlice } from '@reduxjs/toolkit'

import ApiBlog from '../../apiBlog/ApiBlog'

const initialState = {
  articles: [],
  count: 0,
  isLoading: true,
  isError: false,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, { payload }) => {
      return { articles: payload.articles, count: payload.articlesCount, isLoading: false, isError: false }
    },
    setLoading: (state, { payload }) => {
      return { ...state, isLoading: payload, isError: false }
    },
    setError: (state) => {
      return { ...state, isError: true, isLoading: false }
    },
  },
})

export const { actions, reducer } = articlesSlice

export const fetchArticles =
  (offset = 1) =>
  async (dispatch) => {
    dispatch(actions.setLoading(true))
    const apiBlog = new ApiBlog()
    apiBlog
      .getArticles(offset)
      .then((a) => {
        dispatch(actions.setArticles(a))
      })
      .catch(() => {
        dispatch(actions.setError())
      })
    dispatch(actions.setLoading(false))
  }
