import App from '../containers/AppContainer'
import AdminRoute from './Admin'
import Home from './Home'
import Auth from './Auth'


const createRoutes = (store) => {
  return {
    path: '/',
    component: App,
    indexRoute: {
      Home
    },
    childRoutes: [
      AdminRoute(store),
      Auth(store)
    ]
  }
}

export default createRoutes
