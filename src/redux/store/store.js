/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { blogApi } from '../api/blogApi/blog'
import { reducer as userReducer } from '../slices/user.slice'
import { reducer as articleReducer } from '../slices/article.slice'

const reducers = combineReducers({ user: userReducer, article: articleReducer, [blogApi.reducerPath]: blogApi.reducer })
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware),
})

store.subscribe(() => console.log(store.getState(), 'subscribe'))

setupListeners(store.dispatch)
