import {combineReducers } from  'redux'

import { reducer as authReducer } from '../../routes/Auth/modules/AuthModule'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
      auth: authReducer,
      ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer}) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  } else {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
}

export default makeRootReducer()
