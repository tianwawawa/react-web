import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from  'react-redux'

class AuthContainer extends React.component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
})

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)

