import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { reducer as articlesReducer } from '../articles/articles.slice'
import { reducer as articleReducer } from '../articles/article.slice'
import { reducer as userReducer } from '../user/user.slice'

const reducers = combineReducers({ articles: articlesReducer, user: userReducer, article: articleReducer })
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

store.subscribe(() => console.log(store.getState(), 'subscribe'))
export default store
