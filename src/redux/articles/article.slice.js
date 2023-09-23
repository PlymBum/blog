import { createSlice } from '@reduxjs/toolkit'

import ApiBlog from '../../apiBlog/ApiBlog'

const initialState = {
  article: {},
  isLoading: true,
  isError: false,
}

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticle: (state, { payload }) => {
      return { ...state, article: payload.article, isError: false }
    },
    setLoading: (state, { payload }) => {
      return { ...state, isLoading: payload }
    },
    setError: (state, { payload }) => {
      return { article: {}, isError: payload, isLoading: false }
    },
  },
})

export const { actions, reducer } = articleSlice

export const fetchArticle = (slug) => async (dispatch) => {
  dispatch(actions.setLoading(true))
  dispatch(actions.setError(false))
  const apiBlog = new ApiBlog()
  apiBlog
    .getArticle(slug)
    .then((a) => {
      dispatch(actions.setArticle(a))
    })
    .catch(() => {
      dispatch(actions.setError(true))
    })
  dispatch(actions.setLoading(false))
}
