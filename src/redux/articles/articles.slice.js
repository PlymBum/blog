/* eslint-disable default-param-last */
import { createSlice } from '@reduxjs/toolkit'

import ApiBlog from '../../apiBlog/ApiBlog'

const apiBlog = new ApiBlog()

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
    toogleFavorite: (state, { payload }) => {
      return { ...state, ...payload }
    },
  },
})

export const { actions, reducer } = articlesSlice

export const fetchArticles =
  (offset = 1, token = '') =>
  async (dispatch) => {
    dispatch(actions.setLoading(true))
    apiBlog
      .getArticles(offset, token)
      .then((a) => {
        dispatch(actions.setArticles(a))
      })
      .catch(() => {
        dispatch(actions.setError())
      })
    dispatch(actions.setLoading(false))
  }

export const toogleFavorite = (slug, token) => async (dispatch) => {
  apiBlog
    .tooglefavorite(slug, token)
    .then((a) => {
      console.log(a, 'toogle response')
    })
    .catch(dispatch(actions.setError()))
}
