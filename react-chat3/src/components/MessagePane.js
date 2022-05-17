
import React, { useState } from 'react';

export default function MessagePane(props) {
  const currentChannel = props.channel;

  const messagesArray = props.messagesArray;

  const [clickCount, setClickCount] = useState(props.initialCount);

  const handleClick = (event) => {
    console.log("You clicked me!", clickCount);
    setClickCount(clickCount + 1); //modify the state
    // rerender the component
  }

  //only show current channel messages. This is an array of objects at this point
  const channelMessages = messagesArray.filter((messageObj) => {
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

