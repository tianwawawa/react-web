import App from '../containers/AppContainer'
import AdminRoute from './Admin'
import Auth from './Auth'

import Home from './Home'

// Note: Instead of using JSX, we recommend using react-router PlainRoute objects to build route definition.
const createRoutes = (store) => {
  return {
    path: '/',
    component: App,
    indexRoute: {
      component: Home
    },
    childRoutes: [
      AdminRoute(store),
      Auth(store)
    ]
  }
}

export default createRoutes
