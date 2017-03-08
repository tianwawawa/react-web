import App from '../containers/AppContainer'
import Home from './Home'

export const createRoutes = (store) => ({
  path: '/',
  component: App,
  indexRoute: {
    Home
  },
  childRoutes: [

  ]
})

export default createRoutes
