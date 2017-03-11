import React, { Component } from  'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from  '../components/Login'

class LoginContainer extends Component {
  render () {
    return (
      <Login />
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({}, dispatch)
// })
//
// const mapStateToProps = (state) => {
//   return state
// }

// export default connect(mapDispatchToProps, mapStateToProps)(LoginContainer)
export default LoginContainer
