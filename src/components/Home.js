import React, { Component, Fragment } from 'react'
import {Route} from 'react-router-dom';
import Contact from './Contact'
import Header from './Header'
import Submenu from './Submenu';
export default class  extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <div className="main-container">
        <div className="sidemenu">
            <Submenu></Submenu>
        </div>
        <div className="body-content">
            <Fragment>
                <Route path='/home/contact' component={Contact}/>
            </Fragment>
        </div>
        </div>
      </Fragment>
    )
  }
}
