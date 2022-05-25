// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// // Example 1


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// //Example 1
// console.log("About to send");

// const result = fetch("https://api.github.com/search/repositories?q=react");
// console.log("Request sent");
// console.log(result);

//Example 2 - We get back a promise, not a result

// //Example 2 Callback for the .then()
// function whatToDoWhenFulfilled() {
//     console.log("hey it's my turn");
// }

// console.log("About to send");
// const fetchPromise = fetch("https://api.github.com/search/repositories?q=react");
// //Example 2 - we can call a method off of a promise called .then and provide a callback
// fetchPromise.then(whatToDoWhenFulfilled);




// //Example 3 - look at what's in the response
//     // Example 3, log out what the response is, and note the timing
// function whatToDoWhenFulfilled(response) {
//     console.log("hey it's my turn");
//     console.log(response);
// }
// console.log("About to send");
// const fetchPromise = fetch("https://api.github.com/search/repositories?q=react");
// fetchPromise.then(whatToDoWhenFulfilled);

// console.log("Request sent");

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //     <App />
// // );


// //Example 4 - pass as an anonymous function

// console.log("About to send");
// const fetchPromise = fetch("https://api.github.com/search/repositories?q=react");

// //Example 4 (use an anonymous function)
// fetchPromise.then( (response) => {
//     console.log("promise fulfilled");
//     console.log(response);
// });


// //Example 5 - extract the body from the promise

// console.log("About to send");
// const fetchPromise = fetch("https://api.github.com/search/repositories?q=react");
// fetchPromise.then( (response) => {
//     console.log("promise fulfilled");
//     console.log(response);
    
//     //example 5 - Lets now use the .json() method to pull out the data (open the envelop)
//     const dataPromise = response.json();
//     console.log(dataPromise); //it's another promise
//     console.log("started opening the letter");
// });


// //Example 6 - append the two promises .then()'s together
// // note that the second promise actually has the data!

// console.log("About to send");
// const fetchPromise = fetch("https://api.github.com/search/repositories?q=react");
// const thatDataPromise = fetchPromise.then( (response) => {
//     console.log("promise fulfilled");
//     console.log(response);
//     const dataPromise = response.json();
//     console.log(dataPromise); //it's another promise
//     console.log("started opening the letter");
//     return dataPromise;
// });

// thatDataPromise.then((data=> {
//     console.log(data);

// }))
// console.log("Request sent");

// //Example 7 - Clean it up

// fetch("https://api.github.com/search/repositories?q=react")
// .then((response) => {
//     return  response.json();
// })
// .then((data=> {
//     console.log(data);
// }))

// console.log("Request sent");

// //Example 8 - catching errors

// fetch("bad")
// .then( (response) => {
//     return  response.json();
// })
// .then((data=> {
//     console.log(data);
// }))
// .catch((error)=> {
//     console.log(error);
// })
// .then(() => console.log("finally"));
// console.log("Request sent");

// //Example 9 - async/await syntax

// const fetchData = async () => {
//     const response = await fetch("https://api.github.com/search/repositories?q=react");
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );


// Example 10
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App initialSearch="d3"/>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );
