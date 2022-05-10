import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// //  Example 1
=======
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import App from './App';

// const msgElem = <h1 >Hello World</h1>;



// let title = "Hello JSX as a String";

// let header = (
//             <header className="jumbotron">
//               <h1>{title}</h1>
//               <p>{1+1}</p>
//               <p>"hello world".toUpperCase()</p>
//               <p>{"hello world".toUpperCase()}</p>
//             </header>
// );
// const msgElem = (
//   <div>
//     <header className="bg-dark p-3">
//       <h1 id="hello" className="text-light"> Hi Folks</h1>
//     </header>
//     <main>
//       <p>This is a paragraph in my main section</p>
//     </main>
//   </div>
// );

//  Example 1
>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5
// const root = ReactDOM.createRoot(document.getElementById('root'));

// let msgElem = React.createElement(
//     'h1',                    //html tag
//     {                        //object of attributes
//        id        : 'hello',
//        className : 'myClass' 
//     },
//     'Hello World!'           //content
//  ); 

// root.render(msgElem);

// // Example 1a
// const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD

// let header = (<header className="jumbotron">
//                 <h1>Hello JSX</h1>
//               </header>
//               );


// root.render(header);

=======
// let header = <header className="jumbotron"><h1>Hello JSX</h1></header>;
// root.render(header);


// root.render(msgElem);

>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5
// //Example 2
// //inside index.js
// const root = ReactDOM.createRoot(document.getElementById('root'));

// let title = "Hello JSX as a String";

// let header = (
//             <header className="jumbotron">
//               <h1>{title}</h1>
//               <p>{1+1}</p>
//               <p>"hello world".toUpperCase()</p>
//               <p>{"hello world".toUpperCase()}</p>
//             </header>
// );
// root.render(header);

// // Example 3
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const msgElem = (
<<<<<<< HEAD
//   <section>
=======
  
>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5
//     <header className="bg-dark p-3">
//       <h1 id="hello" className="text-light"> Hi Folks</h1>
//     </header>
//     <main>
//       <p>This is a paragraph in my main section</p>
//     </main>
<<<<<<< HEAD
//     </section>
=======

>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5
// );

// root.render(msgElem);

// // Example 3a
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const msgElem = (
//   <div>
//     <header className="bg-dark p-3">
//       <h1 id="hello" className="text-light"> Hi Folks</h1>
//     </header>
//     <main>
//       <p>This is a paragraph in my main section</p>
//     </main>
//   </div>
// );

// root.render(msgElem);

// // Example 4
// const root = ReactDOM.createRoot(document.getElementById('root'));
// function HelloMessage() {

//        let message = "Hello Everyone!";
//        return <h1>{message}</h1>;

// }

// const instance = <HelloMessage />;
// root.render(instance);

<<<<<<< HEAD
// // Example 4a
=======
// Example 4a
>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5

// function HelloMessage() {
//   return <p>Hello World!</p>;
// }

// function GoodbyeMessage() {
//   return <p>See ya later!</p>;
// }

// function MessageList() {
//   return (
//      <div>
//         <HelloMessage /> {/* A HelloMessage component */}
//          <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//      </div>
//   );
// }
// const pageContent = (
//   <div>
//   <header className="bg-dark p-3">
//        <h1 id="hello" className="text-light"> Hi Folks</h1>
//      </header>
//   <MessageList/>;
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(pageContent);

<<<<<<< HEAD
/*** index.js ***/

// import App from './App' //default import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)



=======
>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5
// import { HelloMessage } from './App'

// const pageContent = (
//   <div>
//   <header className="bg-dark p-3">
//        <h1 id="hello" className="text-light"> Hi Folks</h1>
//      </header>
//   <MessageList/>;
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(pageContent);

<<<<<<< HEAD
// /*** in index.js ***/
// import App from './components/App' //default import

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)
=======
/*** in index.js ***/
import App from './components/App' //default import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
>>>>>>> db774e6b77f9e6519159892c07800946eabbf1d5
