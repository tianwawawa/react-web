import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from  'react-router'

class HomeContainer extends React.Component {

  // componentWillMount() {
  //   this.props.router.replace('/admin')
  // }

  render () {
    return (
      <div>
        <Link to='admin'>admin</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

