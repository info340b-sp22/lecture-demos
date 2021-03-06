
import React, {useState} from 'react';

import HeaderBar from './HeaderBar';
import ChannelList from './ChannelList';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';                       

function App(props) {

  const [messagesArray, setMessagesArray] = useState(CHAT_LOG);      

const addMessage = (userId, userName, messageText, channel) => {     

  const newMessage = {
    userId: userId,
    userName: userName,
    userImg: "/img/"+userName+".jpg",
    timestamp: Date.now(),
    text:messageText,
    channel: channel
  }

  const updatedMessagesArray = [...messagesArray, newMessage];
  setMessagesArray(updatedMessagesArray);
}


     //data!
  const channelList = ['general', 'random', 'social', 'birbs', 'channel-5']
  
  const currentChannel ='general';

  const showing = true;

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} />
        </div>
        <main className="col d-flex flex-column chat-column">
          <div className="chat-pane">
            <MessagePane messagesArray={messagesArray} channel={currentChannel} />   
          </div>
        </main>
        <ComposeForm whatToDoWhenSubmitted={addMessage} />                           
      </div>
    </div>
  );
}

export default App;



