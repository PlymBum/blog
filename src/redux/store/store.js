import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { reducer } from '../articles/articles.slice'

const reducers = combineReducers({ articles: reducer })
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

store.subscribe(() => console.log(store.getState(), 'subscribe'))
export default store
