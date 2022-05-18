
// Example 3
import React, {useState} from 'react';
import HeaderBar from './HeaderBar';
import ChannelList from './ChannelList';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';                       
function App(props) {

  const [messagesArray, setMessagesArray] = useState(CHAT_LOG);
  const [currentUser, setCurrentUser] = useState({userId:null, userName:null});         //Example 3 (Moved from HeaderBar)
  console.log(currentUser);

  //add new message
  const addMessage = (userId, userName, messageText, channel) => {

    const newMessage = {
      userId: userId,
      userName: userName,
      userImg: "/img/" + userName + ".jpg",
      timestamp: Date.now(),
      text: messageText,
      channel: channel
    }

    const updatedMessagesArray = [...messagesArray, newMessage];
    setMessagesArray(updatedMessagesArray);
  }

  const loginUser = (userObject) => {                      //Example 3 (Moved from HeaderBar)
      setCurrentUser(userObject);
  }

  //data!
  const channelList = ['general', 'random', 'social', 'birbs', 'channel-5']

  const currentChannel = 'general';

  const showing = true;

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} loginFunction={loginUser} />                    {/*Example 3 */}
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} />
        </div>
        <main className="col d-flex flex-column chat-column">
          <div className="chat-pane">
            <MessagePane messagesArray={messagesArray} channel={currentChannel} />      
          </div>
        </main>
        <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />                            {/*Example 3 */}
      </div>
    </div>
  );
}

export default App;


