export default (store) => {
  return {
    path: 'auth',
    // Async getComponent is only invoked when route matches
    getComponent (nextState, cb) {
      // Webpack - use 'require.ensure' to create a split point and embed an async module loader (jsonp) when bundling
      require.ensure([], (require) => {
        // Webpack - use require callback to define dependencies for bundling
        const AuthContainer = require('./containers/AuthContainer').default
        // Return getComponent
        cb(null, AuthContainer)
        // Webpack named bundle
      }, 'auth')
    },
    childRoutes: [
      {
        path: 'login',
        component: require('./routes/Login').default
      }
    ]
  }
}
