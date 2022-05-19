import React, { useState } from 'react';

import ChannelList from './ChannelList';
import MessagePane  from './MessagePane';
import ComposeForm from './ComposeForm';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5'];

const currentChannel = 'general';

export default function ChatPage(props) {
    const [messageArray, setMessageArray] = useState(SAMPLE_CHAT_LOG);

    const addMessage = (userName, messageText, channel) => {

        const newMessage = {
            userId: userName.toLowerCase(),
            userName: userName,
            userImg: "/img/" + userName + ".jpg",
            timestamp: Date.now(),
            text: messageText,
            channel: channel
        }

        const updatedMessageArray = [...messageArray, newMessage];
        setMessageArray(updatedMessageArray);
    }

    return (
        <div className="row flex-grow-1">
            <div className="col-3">
                <ChannelList channels={CHANNEL_LIST} />
            </div>
            <main className="col d-flex flex-column chat-column">
                <div className="chat-pane">
                    <MessagePane messageArray={messageArray} channel={currentChannel} />
                </div>
            </main>
            <ComposeForm user={props.user} whatToDoWhenSubmitted={addMessage} />                      
        </div>
    )
}
