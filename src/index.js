import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from  'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import makeRooterReducer from  './libs/reducers/index'

const initialState = {}
const store = createStore(
  makeRooterReducer,
  initialState,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
)

store.asyncReducers = {}

const render = () => {
  const routes = require('./routes/index').default(store)
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </AppContainer>
    , document.getElementById('root')
    )
}

if (__DEV__ && module.hot) {
  module.hot.accept('./libs/reducers/index', () => {
    const nextStore = require('./libs/reducers/index')
    store.replaceReducer(nextStore())
  })

  module.hot.accept('./routes/index', () => {
    setTimeout(() => {
      ReactDom.unmountComponentAtNode(document.getElementById('root'))
      render()
    })
  })
}

render()
