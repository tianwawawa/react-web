import axios from 'axios'
import { Record } from  'immutable'

const DATA = {
  "Msg": 'success'
}

const USER_AUTH_LOGIN_REQUEST = 'USER_AUTH_LOGIN_REQUEST'
const USER_AUTH_LOGIN_SUCCESS = 'USER_AUTH_LOGIN_SUCCESS'
const USER_AUTH_LOGIN_FAILURE = 'USER_AUTH_LOGIN_FAILURE'

const USER_LOGOUT = 'USER_LOGOUT'

/*-------------------------------- actions --------------------------------*/

const login = (username, password) => (dispatch) => {
   dispatch({type: USER_AUTH_LOGIN_REQUEST})
   dispatch({type: USER_AUTH_LOGIN_SUCCESS, payload: DATA})
}

const logout = () => {
   return {
     type: USER_LOGOUT,
     payload: {
       isLogin: true
     }
   }
}

export const actions = {
  login,
  logout
}

/*-------------------------------- initial state --------------------------------*/

const InitialState = Record ({
  isFetching: false,
  isLogin: true
})

const initialState = new InitialState()

/*-------------------------------- reducer --------------------------------*/

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_LOGIN_REQUEST:
      return state.setIn(['isFetching'], true)

    case USER_AUTH_LOGIN_SUCCESS:
      return state.setIn(['isFetching', false]).setIn(['isLogin', true])

    case USER_AUTH_LOGIN_FAILURE:
      return state.setIn(['isLogin'], false)

    case USER_LOGOUT:
      return state.setIn(['isLogin', true])
  }
  return state
}










