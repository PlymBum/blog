import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducer } from '../articles/articles.slice'

const reducers = combineReducers({ articles: reducer })
const store = configureStore({
  reducer: reducers,
})

store.subscribe(() => console.log(store.getState(), 'subscribe'))
export default store
