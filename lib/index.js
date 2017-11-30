'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouter = require('react-router');

var _reactHotLoader = require('react-hot-loader');

var _index = require('./libs/reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};
var store = (0, _redux.createStore)(_index2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));

store.asyncReducers = {};

var render = function render() {
  var routes = require('./routes/index').default(store);
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: routes })
    )
  ), document.getElementById('root'));
};

if (__DEV__ && module.hot) {
  module.hot.accept('./libs/reducers/index', function () {
    var nextStore = require('./libs/reducers/index');
    store.replaceReducer(nextStore());
  });

  module.hot.accept('./routes/index', function () {
    setTimeout(function () {
      _reactDom2.default.unmountComponentAtNode(document.getElementById('root'));
      render();
    });
  });
}

render();