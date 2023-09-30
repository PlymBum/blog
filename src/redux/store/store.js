/* eslint-disable import/prefer-default-export */
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
// import thunk from 'redux-thunk'

import { blogApi } from '../api/blogApi/blog'
// import { reducer as articlesReducer } from '../articles/articles.slice'
// import { reducer as articleReducer } from '../articles/article.slice'
// import { reducer as userReducer } from '../user/user.slice'
import { reducer as userReducer } from '../slices/user.slice'
import { reducer as articleReducer } from '../slices/article.slice'
// const reducers = combineReducers({ articles: articlesReducer, user: userReducer, article: articleReducer })
const reducers = combineReducers({ user: userReducer, article: articleReducer, [blogApi.reducerPath]: blogApi.reducer })
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware),
})

store.subscribe(() => console.log(store.getState(), 'subscribe'))

setupListeners(store.dispatch)
