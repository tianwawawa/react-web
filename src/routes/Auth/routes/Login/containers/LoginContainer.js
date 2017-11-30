import React, { Component } from  'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from  '../components/Login'

import { actions as authActions } from '../../../modules/AuthModule'

const actions = {...authActions}

class LoginContainer extends Component {

  static propTypes = {
    actions: React.PropTypes.object
  }

  render () {
    return (
      <Login />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)

