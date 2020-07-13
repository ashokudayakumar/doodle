import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser, faFile, faCalendarAlt,faDatabase,faBookOpen,faBars } 
from '@fortawesome/free-solid-svg-icons'
export default class Submenu extends Component {
  render() {
    return (
      <ul className="sub-menu">
          <li><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faFile}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon></li>
          <li><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></li>
          
      </ul>
    )
  }
}
