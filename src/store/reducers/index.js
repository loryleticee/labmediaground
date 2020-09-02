import { combineReducers } from 'redux'
import { Home } from './home'

export const adminReducer = combineReducers({
  home: Home,
})
