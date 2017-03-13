import React, { Component } from  'react'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AppContainer extends Component {
  render () {
    console.log('精灵后台 打印----')
    console.log(this.props.children)
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

