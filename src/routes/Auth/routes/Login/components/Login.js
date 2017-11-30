import  React, { Component } from 'react'
import {
  Button
} from  'react-bootstrap'

import classnames from  'classnames'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
     return (
       <div className="container">
         <div className="row">
           <div className="col-sm-4">
             <h1>
               登录
             </h1>
           </div>
         </div>
       </div>
     )
  }
}
