import React, { Component } from  'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class HomeContainer extends Component {
  constructor (props) {
    super (props)
    this.state={}
  }

  render () {
    return (
      <div>
        <Link to='/auth/login'>login</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
