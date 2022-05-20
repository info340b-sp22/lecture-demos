
//Example 6 
import React, { useState} from 'react';

import HeaderBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';


import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';

export default function App(props) {
  const initialUser = { userId: null, userName: null }
  const [currentUser, setCurrentUser] = useState(initialUser);

  
  
  const navigateTo = useNavigate();
  console.log("rendering App with", currentUser);

  const loginUser = (userObject) => {
    setCurrentUser(userObject);
    navigateTo('app/chat/general');       //Example 6 - now we have to have a channel

  }

  return (
    <div className="container-fluid d-flex flex-column">

      <Routes>

        <Route path="app" element={<AppLayout currentUser={currentUser} loginFunction={loginUser} />} >

          
          <Route element={<RequireAuth currentUser={currentUser} />} >
            <Route path="chat/:channelParam" element={<ChatPage currentUser={currentUser} />} />    
          </Route>                                                                            
 

          
          <Route path="signin" element={<SignInPage currentUser={currentUser} loginFunction={loginUser} />} />
          <Route path="about" element={<Static.AboutPage />} />
          <Route path="*" element={<Static.ErrorPage />} />
        </Route>

        <Route index element={<Static.WelcomePage currentUser={currentUser} />} />

      </Routes>
    </div>

  )
}


function AppLayout({ currentUser, loginUser }) {
  return (
    <>
      <HeaderBar currentUser={currentUser} loginFunction={loginUser} />
      <Outlet />
    </>
  )
}


function RequireAuth(props) {
  //...determine if user is logged in
  if (!props.currentUser.userId) {  
    return <p>Access Denied</p>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}
