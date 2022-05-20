
//Example 5
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'

//define the HeaderBar component
export default function HeaderBar(props) {
    const currentUser = props.currentUser;
  
    return (
      <header className="text-light bg-primary px-1 d-flex justify-content-between">
        <h1>React Messenger</h1>
  
        {/* links go here */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>   
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="chat/general">Chat</Link>    {/* Example 5 */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="signin">
              <img src={'/img/' + currentUser.userName + '.jpg'} alt={currentUser.userName + " avatar"} /> {/*Example 4 - relative paths now*/}
            </Link>
          </li>
        </ul>
      </header>
    )
  
  }