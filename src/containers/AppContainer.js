// @flow
import React, { Component } from  'react'
<<<<<<< HEAD
type Props = {
  hello: boolean,
};

class AppContainer extends Component<Props> {
  constructor(props:Object){
    super(props)
    this.what = this.what.bind(this)
  }
   what (cute:boolean){
     alert(cute)
   }
   componentWillamount(){
    this.what(true)
   }
=======
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
>>>>>>> 5366d6cd13a4454a8ad45c94b6f446e8748fcdd8

  render () {
    return (
      <div>
<<<<<<< HEAD
        <h5>what are you async{this.props.hello} </h5>
=======
        {this.props.children}
>>>>>>> 5366d6cd13a4454a8ad45c94b6f446e8748fcdd8
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

