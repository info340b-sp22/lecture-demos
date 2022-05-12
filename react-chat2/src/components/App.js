import React from 'react';

import HeaderBar from './HeaderBar';
import ChannelList from './ChannelList';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';

function App(props) {

  //data!
  const channelList = ['general', 'random', 'social', 'birbs', 'channel-5']

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} />
        </div>
        <main className="col d-flex flex-column chat-column">
          <div className="chat-pane">
            <MessagePane channel="general" />
          </div>
        </main>
        <ComposeForm />
      </div>
    </div>
  );
}

export default App;










