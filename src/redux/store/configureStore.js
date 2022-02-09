import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { combineReducers } from 'redux'
import countries from './countries'

const reducer = combineReducers({
  // reducers go here
  countries,
})

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
})

export default store;