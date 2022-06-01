import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'

const FIREBASEUI_CONFIG = {
  signInOptions: [ //array of which signin options to use
    { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, //provider with options
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup', //show popup to log in
  credentialHelper: 'none', //don't show an account chooser
  callbacks: {
    //what should I do when they successfully sign in?
    //conceptually: preventDefault()
    signInSuccessWithAuthResult: () => false //do nothing special; just return false
  }
};


const DEFAULT_USER_NAMES = [null, "Monkey", "Zebra", "Squirrel"]

export default function SignInPage(props) {

  const currentUser = props.currentUser;

  const auth = getAuth(); //the authenticator

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const userObj = {
      userId: whichUser.toLowerCase() || null,
      userName: whichUser || null
    }
    // console.log(userObj);
    props.loginFunction(userObj); //call the prop!
  }


  //rendering
  const userButtons = DEFAULT_USER_NAMES.map((userName) => {
    let classList = "btn user-icon";
    if (userName === currentUser.userName) {
      return null; //don't include!
      // classList += " highlighted"
    }

    return (
      <Dropdown.Item className={classList} key={userName}
        name={userName} onClick={handleClick} >
        <img className="dropDownImg" src={'/img/' + userName + '.jpg'} alt={userName + " avatar"} />
        &nbsp; {userName || "Log out"}
      </Dropdown.Item>
    )
  })

  //if user is logged in, don't show the sign-in page but redirect instead
  //kinda hacky
  if (props.currentUser.userId) {
    return <Navigate to="/chat/general" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <p className="lead">Pick a user:</p>
        <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth} />
      </div>
    </div>
  )
}