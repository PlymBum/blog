// eslint-disable-next-line no-unused-vars
import { bindActionCreators, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import filterReducer from './filterReducer'
import sortingReducer from './sortingReducer'
import { ticketReducer } from './ticketsReducer'
import sortTicketsMiddleware from './middleware/sortingMiddleware'
import { searchIdReducer } from './searchIdReducer'
// import * as actions from './filterActions'

const reducers = combineReducers({
  filter: filterReducer,
  sort: sortingReducer,
  tickets: ticketReducer,
  searchId: searchIdReducer,
})
const store = createStore(reducers, applyMiddleware(sortTicketsMiddleware, thunk))
// store.subscribe(() => console.log(store.getState()))
// eslint-disable-next-line no-console
store.subscribe(() => console.log(store.getState()))
export default store
