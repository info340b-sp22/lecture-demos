// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// import ChannelNav from './ChannelNav';
// import MessagePane from './MessagePane';
// import ComposeForm from './ComposeForm';

// import SAMPLE_CHAT_LOG from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const currentUser = props.currentUser;
//   const [messagesArray, setMessagesArray] = useState(SAMPLE_CHAT_LOG);

//   const params = useParams();
//   const currentChannel = params.channelParam;

//   //add a new message
//   const addMessage = (userId, userName, messageText) => {
//     const newMessage = {
//       userId: userId,
//       userName: userName,
//       userImg: "/img/"+userName+".jpg",
//       text: messageText,
//       timestamp: Date.now(),
//       channel: currentChannel
//     }

//     const updatedMessagesArray = [...messagesArray, newMessage];
//     setMessagesArray(updatedMessagesArray);
//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelNav channels={CHANNEL_LIST} />
//       </div> 
//       <main className="col d-flex flex-column chat-column">
//         <div className="chat-pane">
//           <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
//         </div>              
//         <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
//       </main>
//     </div>
//   )
// }

// // Example 1
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// import ChannelNav from './ChannelNav';
// import MessagePane from './MessagePane';
// import ComposeForm from './ComposeForm';

// //Example 1 - add both the getDatabaes and ref components
// import { getDatabase, ref, set as FirebaseSet } from 'firebase/database';

// import SAMPLE_CHAT_LOG from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const currentUser = props.currentUser;
//   const [messagesArray, setMessagesArray] = useState(SAMPLE_CHAT_LOG);

//   const params = useParams();
//   const currentChannel = params.channelParam;

//   //add a new message
//   const addMessage = (userId, userName, messageText) => {

//     //Example 1 - get a handle to the db
//     //reference Firebase
//     const db = getDatabase(); //url for the database, not the data itself
//     console.log(db);

//     //Example 1 - get a reference to the key/element we want to refer to
//     const msgRef = ref(db, "message"); //refers to message in the database

//     const profLastnameRef = ref(db, "prof/lastName"); //we don't use '.' notation in Firebase
//     console.log(msgRef);


//     // FirebaseSet(msgRef, messageText);
// // 
//     // // Example 1a
//     // FirebaseSet(profLastnameRef, messageText);


//     //Example 1b - 

//     const newMessage = {
//       userId: userId,
//       userName: userName,
//       userImg: "/img/"+userName+".jpg",
//       text: messageText,
//       timestamp: Date.now(),
//       channel: currentChannel
//     }

//     FirebaseSet(msgRef, newMessage);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelNav channels={CHANNEL_LIST} />
//       </div>
//       <main className="col d-flex flex-column chat-column">
//         <div className="chat-pane">
//           <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
//         </div>
//         <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
//       </main>
//     </div>
//   )
// }


// // Example 2

// //Example 2 add the effectHook
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import ChannelNav from './ChannelNav';
// import MessagePane from './MessagePane';
// import ComposeForm from './ComposeForm';

// //Example 2 - add onValue (listening for when a value changes)
// import { getDatabase, ref, set as FirebaseSet, onValue } from 'firebase/database';

// import SAMPLE_CHAT_LOG from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const currentUser = props.currentUser;
//   const [messagesArray, setMessagesArray] = useState(SAMPLE_CHAT_LOG);

//   const params = useParams();
//   const currentChannel = params.channelParam;

//   //Example 2 - add onValue listener in an effectHook
//   useEffect(() => {
//     //what to do first time component loads

//     //hook up listener for when value changes - its okay to add these locally
//     const db = getDatabase(); 
//     const msgRef = ref(db, "exampleMessage"); 

//     onValue(msgRef, (snapshot) => {
//       const newVal = snapshot.val();    //the .val() gives the actual data
//       console.log("value changed to", newVal);

//     })

//   }, [])

//   //add a new message
//   const addMessage = (userId, userName, messageText) => {

//     const db = getDatabase(); 
//     const msgRef = ref(db, "exampleMessage"); //refers to message in the database

//      const newMessage = {
//       userId: userId,
//       userName: userName,
//       userImg: "/img/"+userName+".jpg",
//       text: messageText,
//       timestamp: Date.now(),
//       channel: currentChannel
//     }

//     FirebaseSet(msgRef, newMessage);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelNav channels={CHANNEL_LIST} />
//       </div>
//       <main className="col d-flex flex-column chat-column">
//         <div className="chat-pane">
//           <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
//         </div>
//         <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
//       </main>
//     </div>
//   )
// }


// // Example 3 - update state and render

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import ChannelNav from './ChannelNav';
// import MessagePane from './MessagePane';
// import ComposeForm from './ComposeForm';


// import { getDatabase, ref, set as FirebaseSet, onValue } from 'firebase/database';

// import SAMPLE_CHAT_LOG from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const currentUser = props.currentUser;

//   //Example 3 - make the initial array to be empty
//   const [messagesArray, setMessagesArray] = useState([]);

//   const params = useParams();
//   const currentChannel = params.channelParam;


//   useEffect(() => {
//     const db = getDatabase(); 
//     const msgRef = ref(db, "exampleMessage"); 

//     onValue(msgRef, (snapshot) => {
//       const newVal = snapshot.val(); 
//       console.log("value changed to", newVal);

//       //Example 3 - change state so it updates the messages
//       if(newVal != null){
//         setMessagesArray([newVal]);
//       }


//     })

//   }, [])

//   //add a new message
//   const addMessage = (userId, userName, messageText) => {

//     const db = getDatabase(); 
//     const msgRef = ref(db, "exampleMessage"); //refers to message in the database

//      const newMessage = {
//       userId: userId,
//       userName: userName,
//       userImg: "/img/"+userName+".jpg",
//       text: messageText,
//       timestamp: Date.now(),
//       channel: currentChannel
//     }

//     FirebaseSet(msgRef, newMessage);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelNav channels={CHANNEL_LIST} />
//       </div>
//       <main className="col d-flex flex-column chat-column">
//         <div className="chat-pane">
//           <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
//         </div>
//         <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
//       </main>
//     </div>
//   )
// }

// // Example 4 - Cleanup

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import ChannelNav from './ChannelNav';
// import MessagePane from './MessagePane';
// import ComposeForm from './ComposeForm';


// import { getDatabase, ref, set as FirebaseSet, onValue } from 'firebase/database';

// import SAMPLE_CHAT_LOG from '../data/chat_log.json';

// const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

// export default function ChatPage(props) {
//   const currentUser = props.currentUser;
//   const [messagesArray, setMessagesArray] = useState([]);

//   const params = useParams();
//   const currentChannel = params.channelParam;

//    useEffect(() => {
//     const db = getDatabase(); 
//     const msgRef = ref(db, "exampleMessage"); 

//     //example 4 - get the function that turns off the listener (offFunction)
//   const offFunction =  onValue(msgRef, (snapshot) => {
//       const newVal = snapshot.val(); 
//       console.log("onValue loading");

//       if(newVal != null){
//         setMessagesArray([newVal]);
//       }

//     })

//     //example 4 - what to do when component unmounts
//     const cleanup = function() {
//       console.log("cleaning up")
//       offFunction();
//     }

//     return cleanup;

//   }, [])

//   //add a new message
//   const addMessage = (userId, userName, messageText) => {

//     const db = getDatabase(); 
//     const msgRef = ref(db, "exampleMessage"); //refers to message in the database

//      const newMessage = {
//       userId: userId,
//       userName: userName,
//       userImg: "/img/"+userName+".jpg",
//       text: messageText,
//       timestamp: Date.now(),
//       channel: currentChannel
//     }

//     FirebaseSet(msgRef, newMessage);

//   }


//   return (
//     <div className="row flex-grow-1">
//       <div className="col-3">
//         <ChannelNav channels={CHANNEL_LIST} />
//       </div>
//       <main className="col d-flex flex-column chat-column">
//         <div className="chat-pane">
//           <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
//         </div>
//         <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
//       </main>
//     </div>
//   )
// }




// Example 5

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChannelNav from './ChannelNav';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';


import { getDatabase, ref, set as FirebaseSet, onValue, push as firebasePush } from 'firebase/database';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const currentUser = props.currentUser;
  const [messagesArray, setMessagesArray] = useState([]);

  const params = useParams();
  const currentChannel = params.channelParam;

  useEffect(() => {
    const db = getDatabase();
    const msgRef = ref(db, "exampleMessage");

    
    const exampleoffFunction = onValue(msgRef, (snapshot) => {
      const newVal = snapshot.val();
      console.log("value changed to", newVal);

      // if (newVal != null) {
      //   setMessagesArray([newVal]);
      // }

    })

    const allMsgRef = ref(db, "allMessages");
    onValue(allMsgRef, (snapshot) => {
      const newVal = snapshot.val();
      console.log(newVal);

      const keys = Object.keys(newVal);
      console.log(keys);
      const newObjArray = keys.map((keyString) => {
        return newVal[keyString]
      })
      console.log(newObjArray);
        
      setMessagesArray(newObjArray)

    })

    const cleanup = function () {
     exampleoffFunction ();
    }

    return cleanup;

  }, [])

  //add a new message
  const addMessage = (userId, userName, messageText) => {

    const db = getDatabase();
    const allMsgRef = ref(db, "allMessages"); //refers to message in the database

    const newMessage = {
      userId: userId,
      userName: userName,
      userImg: "/img/" + userName + ".jpg",
      text: messageText,
      timestamp: Date.now(),
      channel: currentChannel
    }

    firebasePush(allMsgRef, newMessage);

  }


  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelNav channels={CHANNEL_LIST} />
      </div>
      <main className="col d-flex flex-column chat-column">
        <div className="chat-pane">
          <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
        </div>
        <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
      </main>
    </div>
  )
}
