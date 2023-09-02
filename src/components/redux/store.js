// eslint-disable-next-line no-unused-vars
import { bindActionCreators, createStore, combineReducers } from 'redux'

import filterReducer from './filterReducer'
import sortingReducer from './sortingReducer'
// import * as actions from './filterActions'

const reducers = combineReducers({ filter: filterReducer, sort: sortingReducer })
const store = createStore(reducers)
// store.subscribe(() => console.log(store.getState()))
console.log(store.getState())
export default store
