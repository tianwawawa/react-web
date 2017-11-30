// @flow
import React, { Component } from  'react'
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

  render () {
    return (
      <div>
        <h5>what are you async{this.props.hello} </h5>
      </div>
    )

  }
}

export default AppContainer
