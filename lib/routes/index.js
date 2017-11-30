'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoutes = undefined;

var _AppContainer = require('../containers/AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createRoutes = exports.createRoutes = function createRoutes(store) {
  return {
    path: '/',
    component: _AppContainer2.default,
    indexRoute: {
      Home: _Home2.default
    },
    childRoutes: []
  };
};

exports.default = createRoutes;