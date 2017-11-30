import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AdminHeader from '../components/Admin/AdminHeader'
import AdminFooter from '../components/Admin/AdminFooter'
/**
 * Admin Container
 */
class AdminContainer extends React.Component {
  render () {
    return (
      <div>
        <AdminHeader router={this.props.router} />
        {this.props.children}
        <AdminFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
