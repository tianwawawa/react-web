'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectReducer = exports.makeRootReducer = undefined;

var _redux = require('redux');

var makeRootReducer = exports.makeRootReducer = function makeRootReducer(asyncReducers) {
  return (0, _redux.combineReducers)({});
};

var injectReducer = exports.injectReducer = function injectReducer(store, _ref) {
  var key = _ref.key,
      reducer = _ref.reducer;

  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return;
  } else {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
  }
};

exports.default = makeRootReducer();