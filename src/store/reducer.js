import { combineReducers } from 'redux'
import { quickBooksReducer } from './quickBooks.reducer'

const createReducer = asyncReducers => combineReducers({
  Qbooks: quickBooksReducer,
  ...asyncReducers
})

export default createReducer
