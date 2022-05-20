import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//css!
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <App />
  
// );
// Example 1
root.render(
  
  <BrowserRouter>
  <App />
  </BrowserRouter>

);