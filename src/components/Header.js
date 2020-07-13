import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMailBulk,faBell,faPlus, faArrowAltCircleDown }
 from '@fortawesome/free-solid-svg-icons'
export default class Header extends Component {
  render() {
    return (
      <div className="header-menu">
        <ul className="h-menu">

            <li className="leftside"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></li>
            <li className="right"><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></li>
            <li className="right">Mark Henry <FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon></li>
            <li className="right"><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></li>
            <li className="right"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add</li>
        </ul>
      </div>
    )
  }
}
