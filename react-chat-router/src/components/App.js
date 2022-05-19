import React, {useState} from 'react';
import ChatPage from './ChatPage';
import HeaderBar from './HeaderBar';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

export default function App(props) {
  //state
  const [currentUser, setCurrentUser] = useState({ userId: null, userName: null });
  console.log(currentUser);

  const loginUser = (userObject) => {
    setCurrentUser(userObject);
  }


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar user={currentUser}  />
      <SignInPage user={currentUser} loginFunction={loginUser}/>
      <ChatPage user={currentUser} />
      {/* <Static.WelcomePage user={currentUser}/> */}
      {/* <Static.AboutPage /> */}
      {/* <Static.ErrorPage /> */}

    </div>

  )
}
