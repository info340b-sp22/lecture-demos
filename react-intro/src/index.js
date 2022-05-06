import React from 'react';
import ReactDOM from 'react-dom';


// //  Example 1
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
// let header = <header className="jumbotron"><h1>Hello JSX</h1></header>;
// root.render(header);




// // Example 2
//inside index.js
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
// const msgElem = (
//     
//       <header className="bg-dark p-3">
//         <h1 id="hello" className="text-light"> Hi Folks</h1>
//       </header>
//       <main>
//         <p>This is a paragraph in my main section</p>
//       </main>
//     
//   );

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


// // Example 4a

// function HelloMessage() {
//     return <p>Hello World!</p>;
//   }
  
//   function GoodbyeMessage() {
//     return <p>See ya later!</p>;
//   }
  
//   function MessageList() {
//     return (
//        <div>
//           <HelloMessage /> {/* A HelloMessage component */}
//            <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//        </div>
//     );
//   }
//   const pageContent = (
//     <div>
//     <header className="bg-dark p-3">
//          <h1 id="hello" className="text-light"> Hi Folks</h1>
//        </header>
//     <MessageList/>;
//     </div>
//   );
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(pageContent);
  
  
// // Example 5

// /*** in index.js ***/
// import App from './App' //default import

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)

// //*** in App.js ***/
// import { HelloMessage, MessageList } from './Messages'

// //declare a function component
// export default function App() {
//   return (
//     <MessageList /> 
//   )
// }

// //*** in Messages.js ***/
// function HelloMessage() {
//     return <p>Hello World!</p>;
//   }
  
//   function GoodbyeMessage() {
//     return <p>See ya later!</p>;
//   }
  
//   export function MessageList() {
//     return (
//        <div>
//           <HelloMessage /> {/* A HelloMessage component */}
//            <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//        </div>
//     );
//   }
//   const pageContent = (
//     <div>
//     <header className="bg-dark p-3">
//          <h1 id="hello" className="text-light"> Hi Folks</h1>
//        </header>
//     <MessageList/>;
//     </div>
//   );


// // Props example in Messages 
// function HelloMessage(props) {
//     let propsMessage = props.message;
//     if(props.makeItKnown){
//       propsMessage = propsMessage.toUpperCase();
//     }
//     return <p>{propsMessage}</p>;
//   }
  
//   function GoodbyeMessage() {
//     return <p>See ya later!</p>;
//   }
  
//   export function MessageList() {
//     return (
//        <div>
//           <HelloMessage message="hey there hello message" makeItKnown={true}/> {/* A HelloMessage component */}
//           <HelloMessage message="Another Message" makeItKnown={false}/> {/* A HelloMessage component */}
//            <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//        </div>
//     );
//   }
//   const pageContent = (
//     <div>
//     <header className="bg-dark p-3">
//          <h1 id="hello" className="text-light"> Hi Folks</h1>
//        </header>
//     <MessageList/>;
//     </div>
//   );

// // Props with an array and map (transform) example
// function MessageItem(props) {
//     let propsMessage = props.message;
    
//     return <p>{propsMessage}</p>;
//   }
  
//   export function MessageList(props) {
//     console.log(props);
  
//     const msgComponents = props.messages.map((msgStr) => {
//       const elem = <MessageItem message={msgStr} key={msgStr} />; //pass prop down!
//       return elem
//     })
    
  
//     return (
//       <div>
//         {msgComponents}
//       </div>
//     );
//   }
  