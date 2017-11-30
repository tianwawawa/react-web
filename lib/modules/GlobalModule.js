'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _immutable = require('immutable');

/* ------------------------- actions ------------------------*/
/* ------------------------- initial state ------------------------*/
var InitialState = (0, _immutable.Record)({});

var initialState = new InitialState();
/* ------------------------- reducer ------------------------*/
var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return state;
};