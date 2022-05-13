// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//   const currentChannel = props.channel

//   const handleClick = (event) => {
//     console.log("You clicked me!");
//   }

//   //only show current channel messages. This is an array of objects at this point
//   const channelMessages = CHAT_LOG.filter((messageObj) => {
//     return messageObj.channel == currentChannel;
//   })

//   //newMessageComponentArray is an array of elements <>
//   const newMessageComponentArray = channelMessages.map((messageObj) => {
//     const transformed = (
//       <Message
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return transformed;
//   })

//   // // example 1
//   // if (channelMessages.length == 0) {
//   //   return (<p>No messages found</p>)
//   // }

//   return (
//     <div className="my-2">
//       <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//         Click me!
//       </button>
//       {newMessageComponentArray}
//     </div>
//   )
// }


// function Message(props) {
//   const { userName, userImg, text } = props.messageData; //destructuring!

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post")
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <img src={userImg} />
//       <div className="message-body">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// //Example 2
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//   const currentChannel = props.channel

//   const handleClick = (event) => {
//     console.log("You clicked me!");
//   }

//   //only show current channel messages. This is an array of objects at this point
//   const channelMessages = CHAT_LOG.filter((messageObj) => {
//     return messageObj.channel == currentChannel;
//   })

//   //newMessageComponentArray is an array of elements <>
//   const newMessageComponentArray = channelMessages.map((messageObj) => {
//     const transformed = (
//       <Message
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return transformed;
//   })

//   // example 1
//   if (channelMessages.length == 0) {
//     return (<p>No messages found</p>)
//   }

//   const showing = true;

//   return (
//     <div className="my-2">

//       {showing &&
//         <div>
//           <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//             Click me!
//           </button>
//           <hr />
//         </div>
//       }
//       {newMessageComponentArray}
//     </div>
//   )
// }


// function Message(props) {
//   const { userName, userImg, text } = props.messageData; //destructuring!

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post")
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <img src={userImg} />
//       <div className="message-body">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }


// //Example 3 - click count
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//   const currentChannel = props.channel

//   let clickCount = 0;

//   const handleClick = (event) => {
//     console.log("You clicked me!");
//     clickCount++;
//   }

//   //only show current channel messages. This is an array of objects at this point
//   const channelMessages = CHAT_LOG.filter((messageObj) => {
//     return messageObj.channel == currentChannel;
//   })

//   //newMessageComponentArray is an array of elements <>
//   const newMessageComponentArray = channelMessages.map((messageObj) => {
//     const transformed = (
//       <Message
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return transformed;
//   })

//     if (channelMessages.length == 0) {
//     return (<p>No messages found</p>)
//   }

//   const showing = true;

//   return (
//     <div className="my-2">

//       {showing &&
//         <div>
//           <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//             I've been clicked {clickCount} times!
//           </button>
//           <hr />
//         </div>
//       }
//       {newMessageComponentArray}
//     </div>
//   )
// }


// function Message(props) {
//   const { userName, userImg, text } = props.messageData; //destructuring!

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post")
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <img src={userImg} />
//       <div className="message-body">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// //Example 3 - click count 3 things
// import React, {useState} from 'react';
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {

//   // console.log("rendering Message Pane");     //3

//   const currentChannel = props.channel;

//    // let clickCount = 0;

//   // const setResultsArray = useState(0);        //1
//   // const clickCount = setResultsArray[0];
//   // const setClickCount = setResultsArray[1]; //state setter function

//   // let [clickCount, setClickCount] = useState(0); //2

//   let [clickCount, setClickCount] = useState(props.initialCount);  //4

//    const handleClick = (event) => {
//     console.log("You clicked me!");
//     setClickCount(clickCount + 1); //modify the state
//                                   // rerender the component
//   }

//   //only show current channel messages. This is an array of objects at this point
//   const channelMessages = CHAT_LOG.filter((messageObj) => {
//     return messageObj.channel == currentChannel;
//   })

//   //newMessageComponentArray is an array of elements <>
//   const newMessageComponentArray = channelMessages.map((messageObj) => {
//     const transformed = (
//       <Message
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return transformed;
//   })

//     if (channelMessages.length == 0) {
//     return (<p>No messages found</p>)
//   }

//   const showing = true;

//   return (
//     <div className="my-2">

//       {showing &&
//         <div>
//           <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//             I've been clicked {clickCount} times!
//           </button>
//           <hr />
//         </div>
//       }
//       {newMessageComponentArray}
//     </div>
//   )
// }


// function Message(props) {
//   const { userName, userImg, text } = props.messageData; //destructuring!

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post")
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <img src={userImg} />
//       <div className="message-body">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }


// // Example 4
// import React, { useState } from 'react';
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {

//   // console.log("rendering Message Pane");     //3
    
//   const currentChannel = props.channel;

//   let [clickCount, setClickCount] = useState(0);  //4
//   console.log(clickCount); 

//   const handleClick = (event) => {
//     console.log("You clicked me!");
//     setClickCount(clickCount + 1);
//       }

//   //only show current channel messages. This is an array of objects at this point
//   const channelMessages = CHAT_LOG.filter((messageObj) => {
//     return messageObj.channel == currentChannel;
//   })

//   //newMessageComponentArray is an array of elements <>
//   const newMessageComponentArray = channelMessages.map((messageObj) => {
//     const transformed = (
//       <Message
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return transformed;
//   })

//   if (channelMessages.length == 0) {
//     return (<p>No messages found</p>)
//   }

//   const showing = true;

//   return (
//     <div className="my-2">

//       {showing &&
//         <div>
//           <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//             I've been clicked {clickCount} times!
//           </button>
//           <hr />
//         </div>
//       }
//       {newMessageComponentArray}
//     </div>
//   )
// }


// function Message(props) {
//   const { userName, userImg, text } = props.messageData; //destructuring!

//   const [isLiked, setIsLiked] = useState(false);

//   let buttonColor = 'grey';
//   if (isLiked)
//     buttonColor = 'red';

//   const handleClick = (event) => {
//     setIsLiked(!isLiked);
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <img src={userImg} />
//       <div className="message-body">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }



// Example 6

import React, { useState } from 'react';
// import CHAT_LOG from '../data/chat_log.json';                                         //example 6 moves to app to help elevate state

export default function MessagePane(props) {
  const currentChannel = props.channel;

  // const [messagesArray, setMessagesArray] = useState(CHAT_LOG);                         //example 6 moves to app to elevate state

  // //add new message
  // const addMessage = (userId, userName, messageText, channel) => {                      //example 6 moves to app to elevate state

  //   const newMessage = {
  //     userId: userId,
  //     userName: userName,
  //     userImg: "/img"+userName+".jpg",
  //     timestamp: Date.now(),
  //     channel: channel
  //   }

  //   const updatedMessagesArray = [...messagesArray, newMessage];
  //   setMessagesArray(updatedMessagesArray);
  // }

  const messagesArray = props.messagesArray;                        //example 6

  const [clickCount, setClickCount] = useState(props.initialCount);

  const handleClick = (event) => {
    console.log("You clicked me!", clickCount);
    setClickCount(clickCount + 1); //modify the state
    // rerender the component
  }

  //only show current channel messages. This is an array of objects at this point
  const channelMessages = messagesArray.filter((messageObj) => {                             // example 6
    return messageObj.channel == currentChannel;
  })

  //newMessageComponentArray is an array of elements <>
  const newMessageComponentArray = channelMessages.map((messageObj) => {
    const transformed = (
      <Message
        messageData={messageObj}
        key={messageObj.timestamp}
      />
    )
    return transformed;
  })

  if (channelMessages.length == 0) {
    return (<p>No messages found</p>)
  }

  const showing = true;

  return (
    <div className="my-2">

      {showing &&
        <div>
          <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
            I've been clicked {clickCount} times!
          </button>
          <hr />
        </div>
      }
      {newMessageComponentArray}
    </div>
  )
}


function Message(props) {
  const { userName, userImg, text } = props.messageData; //destructuring!

  const [isLiked, setIsLiked] = useState(false);

  let buttonColor = 'grey';
  if (isLiked)
    buttonColor = 'red';

  const handleClick = (event) => {
    setIsLiked(!isLiked);
  }

  return (
    <div className="message d-flex mb-3">
      <img src={userImg} />
      <div className="message-body">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}

