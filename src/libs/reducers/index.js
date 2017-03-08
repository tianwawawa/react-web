import {combineReducers } from  'redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({

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
