
//Example 6
import React, { useState } from 'react';

import ChannelNav from './ChannelNav';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';
import {useParams} from 'react-router-dom';           //Example 6
import SAMPLE_CHAT_LOG from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5'];



export default function ChatPage(props) {
  const currentUser = props.currentUser;

  const [messagesArray, setMessagesArray] = useState(SAMPLE_CHAT_LOG);

  const params = useParams();              //Example 6
  console.log("params:",params);

  // const currentChannel = 'general';
  const currentChannel = params.channelParam;       //Example 6

  const addMessage = (userId, userName, messageText, channel) => {

    const newMessage = {
      userId: userId,
      userName: userName,
      userImg: "/img/" + userName + ".jpg",
      timestamp: Date.now(),
      text: messageText,
      channel: currentChannel           //Example 6
    }

    const updatedMessagesArray = [...messagesArray, newMessage];
    setMessagesArray(updatedMessagesArray);
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

