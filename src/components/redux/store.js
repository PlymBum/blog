import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import filterReducer from './filterReducer'
import sortingReducer from './sortingReducer'
import { ticketReducer } from './ticketsReducer'
import { searchIdReducer } from './searchIdReducer'

const reducers = combineReducers({
  filter: filterReducer,
  sort: sortingReducer,
  tickets: ticketReducer,
  searchId: searchIdReducer,
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
