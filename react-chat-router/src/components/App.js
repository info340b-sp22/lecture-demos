import React, {useState} from 'react';
import HeaderBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

export default function App(props) {
  const initialUser = {userId:null, userName:null}
  const [currentUser, setCurrentUser] = useState(initialUser);
  console.log("rendering App with", currentUser);

  const loginUser = (userObject) => {
    setCurrentUser(userObject);
  }


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} loginFunction={loginUser} />
      
      <SignInPage currentUser={currentUser} loginFunction={loginUser}/>
      <ChatPage currentUser={currentUser} />
      {/* <Static.WelcomePage user={currentUser}/> */}
      {/* <Static.AboutPage /> */}
      {/* <Static.ErrorPage /> */}

    </div>

  )
}
