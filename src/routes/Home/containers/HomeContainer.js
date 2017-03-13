import  React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import { Link } from  'react-router'

class HomeContainer extends Component {
  render () {
    return (
      <div>
        <Link to='admin'>admin</Link>
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

