import { combineReducers } from 'redux'
import { injectReducer } from '../../libs/reducers'

import { reducer as homeReducer } from './routes/Home'
// import { reducer as productsReducer } from './routes/Products'
// import { reducer as shopsReducer } from './routes/Shops'

import Home from './routes/Home'
// import Shops from './routes/Shops'
// import Products from './routes/Products'

// const redirectToLogin = (store) => (nextState, replace) => {
//   if (!store.getState().auth.isLogin) {
//     replace('/auth/login')
//   }
// }

export default (store) => {
  return {
    path: 'admin',
    indexRoute: {
      component: Home
    },
    // onEnter: redirectToLogin(store),
    // Async getComponent is only invoked when route matches
    getComponent (nextState, cb) {
      // Webpack - use 'require.ensure' to create a split point and embed an async module loader (jsonp) when bundling
      require.ensure([], (require) => {
        // Webpack - use require callback to define dependencies for bundling
        const AdminContainer = require('./containers/AdminContainer').default
        const reducer = combineReducers({
          home: homeReducer,
          // products: productsReducer,
          // shops: shopsReducer
        })

        // Add the reducer to the store
        injectReducer(store, {key: 'admin', reducer})
        // Return getComponent
        cb(null, AdminContainer)
        // Webpack named bundle
      }, 'admin')
    },
    childRoutes: [
      // Shops(store),
      // Products(store)
    ]
  }
}
