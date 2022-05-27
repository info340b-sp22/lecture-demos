// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import App from './components/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>

// );


//Global Cloud variable
/* 
const rtdb = {
  message: "hello world",
  prof: {
    firstName: "Tim"
    lastName: "Carlson"
  },
  userData: {
    userId: {
      ...
    }
  }
}
*/

//Setup Example

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//Setup Example
import { initializeApp } from "firebase/app";
import App from './components/App';


//Setup Example
const firebaseConfig = {
  apiKey: "AIzaSyDgOETDcsTgArkXBGp9ikAAzc0iTVUJD4Q",
  authDomain: "react-chat-info340bsp22.firebaseapp.com",
  databaseURL: "https://react-chat-info340bsp22-default-rtdb.firebaseio.com",
  projectId: "react-chat-info340bsp22",
  storageBucket: "react-chat-info340bsp22.appspot.com",
  messagingSenderId: "828665085815",
  appId: "1:828665085815:web:ded0a6b8160fe168152b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter> <App /> </BrowserRouter>

);

