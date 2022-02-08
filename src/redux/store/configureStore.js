import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import countries from './countries'

const reducer = combineReducers({
  // reducers go here
  countries,
})

const store = configureStore({
  reducer
})

export default store;