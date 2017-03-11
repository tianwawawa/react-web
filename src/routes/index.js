import App from '../containers/AppContainer'
import Home from './Home'
import Auth from './Auth'

const createRoutes = (store) => {
  console.log('another --=======')
  console.log(store)
  return {
    path: '/',
    component: App,
    indexRoute: {
      Home
    },
    childRoutes: [
      Auth(store)
    ]
  }
}

export default createRoutes
