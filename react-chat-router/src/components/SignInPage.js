
//Example 4
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USER_NAMES = [null, "monkey", "squirrel", "zebra"]

export default function SignInPage(props) {

  const currentUser = props.currentUser;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name; //access button, not image
    const userObj = {
      userId: whichUser.toLowerCase() || null,
      userName: whichUser || null
    }
    props.loginFunction(userObj);
  }


  const userButtons = DEFAULT_USER_NAMES.map((userName) => {
    let classList = "btn user-icon";
    if (userName === currentUser.userName) {
      return null; //don't include!
      // classList += " highlighted"
    }

    return (
      <Dropdown.Item className={classList} key={userName}
        name={userName} onClick={handleClick} >
        <img src={'/img/' + userName + '.jpg'} alt={userName + " avatar"} />
        &nbsp; {userName || "Log out"}
      </Dropdown.Item>
    )
  })

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <div className="lead">Pick a user:
          <Dropdown>
            <Dropdown.Toggle variant="light">
              <img src={'/img/' + currentUser.userName + '.jpg'} alt={currentUser.userName + ' avatar'} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {userButtons}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}