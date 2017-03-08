import  React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from  'redux'
import Helmet from  'react-helmet'

class HomeContainer extends  React.Component {
  render () {
    return (
      <div>
        <Helmet title='91集买' />
      </div>
    )
  }
}

export default HomeContainer
