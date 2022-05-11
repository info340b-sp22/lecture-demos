// // Initial Message Pane
// export default function MessagePane(props) {
//     return  (
//          <div>Messages go here</div>
//     )

// }


// // Updated Message Pane with Message component added
// export default function MessagePane(props) {
//     return  (
//         <div>
//             <Message/>
//             <Message/>
//             <Message/>
//             </div>
//     )

// }

// function Message(props) {
//     return (
//         <div>
//             <img src=""/>
//             <p> Joe</p>
//             <p>This is my message</p>
//         </div>
//     )
// }

// // Updated Message Pane with Message component added
// export default function MessagePane(props) {
//     return (
//         <div>
//             <Message />
//             <Message />
//             <Message />
//         </div>
//     )

// }

// function Message(props) {
//     return (
//         <div className="message d-flex mb-3">
//             <img src="./img/monkey.jpg" />
//             <div className="message-body">
//                 <p> Monkey</p>
//                 <p>I like Bananas</p>
//             </div>
//         </div>
//     )
// }

// // Work on adding the external data
// // Using props, not using the CHAT_LOG yet
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//     return (
//         <div>
//             <Message userName="Bobo" userImg="img/monkey.jpg" text="I love bananas!" />
//             <Message userName="Zoro" userImg="img/zebra.jpg" text="I'm striped!" />
//             <Message userName="Rocky" userImg="img/squirrel.jpg" text="I can fly!" />
//         </div>
//     )

// }

// function Message(props) {
//     console.log(props);
//     const userName=props.userName;
//     const userImg=props.userImg;
//     const text=props.text;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }


// // Work on adding the external data
// // Updated Message Pane with Message component added
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//     console.log(CHAT_LOG);
//     return (
//         <div>
//             <Message userName={CHAT_LOG[0].userName} userImg={CHAT_LOG[0].userImg} text={CHAT_LOG[0].text} />
//             <Message userName={CHAT_LOG[1].userName} userImg={CHAT_LOG[1].userImg} text={CHAT_LOG[1].text} />
//             <Message userName={CHAT_LOG[2].userName} userImg={CHAT_LOG[2].userImg} text={CHAT_LOG[2].text} />
//         </div>
//     )

// }

// function Message(props) {
//     console.log(props);
//     const userName=props.userName;
//     const userImg=props.userImg;
//     const text=props.text;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }


// // Loop through using an array of elements
// import CHAT_LOG from '../data/chat_log.json';

// console.log(CHAT_LOG);

// // creates a newMappedArray of message elements!
// const newMappedArray = CHAT_LOG.map ((messageObj) => {
//     const transformed = (
//     <Message userName={messageObj.userName} userImg={messageObj.userImg} text={messageObj.text}/>
//     )
//     return transformed;
// })


// export default function MessagePane(props) {
//     return (
//         <div>
//             {newMappedArray}
//         </div>
//     )

// }

// function Message(props) {
//     console.log(props);
//     const userName=props.userName;
//     const userImg=props.userImg;
//     const text=props.text;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// //filter based on the channel type
// import CHAT_LOG from '../data/chat_log.json';
// const generalMessage = CHAT_LOG.filter((messageObj) => {
//     return messageObj.channel == 'general';
// })

// const newMappedArray = generalMessage.map ((messageObj) => {
//     const transformed = (
//     <Message userName={messageObj.userName} userImg={messageObj.userImg} text={messageObj.text}/>
//     )
//     return transformed;
// })

// export default function MessagePane(props) {
//     return (
//         <div>
//             {newMappedArray}
//         </div>
//     )

// }

// function Message(props) {
//     console.log(props);
//     const userName=props.userName;
//     const userImg=props.userImg;
//     const text=props.text;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// //Clean up Filtering based on the channel type
// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//     const currentChannel = props.channel;
    
//     const channelMessages = CHAT_LOG.filter((messageObj) => {
//         return messageObj.channel == 'general';
//     })
    
//     const newMappedArray = channelMessages.map ((messageObj) => {
//         const transformed = (
//         <Message key={messageObj.timestamp} userName={messageObj.userName} userImg={messageObj.userImg} text={messageObj.text}/>
//         )
//         return transformed;
//     })
//     return (
//         <div>
//             <h2>Channel: {currentChannel}</h2>
//             {newMappedArray}
//         </div>
//     )
// }

// function Message(props) {
//     console.log(props);
//     const userName=props.userName;
//     const userImg=props.userImg;
//     const text=props.text;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }


// //Destructuring Example

// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//     const currentChannel = props.channel;
    
//     const channelMessages = CHAT_LOG.filter((messageObj) => {
//         return messageObj.channel == 'general';
//     })
    
//     const newMappedArray = channelMessages.map ((messageObj) => {
//         const transformed = (
//         <Message userName={messageObj.userName} userImg={messageObj.userImg} text={messageObj.text}/>
//         )
//         return transformed;
//     })
//     return (
//         <div>
//             <h2>Channel: {currentChannel}</h2>
//             {newMappedArray}
//         </div>
//     )
// }

// function Message(props) {
//     const { userName, userImg, text} = props;
//     // const userName=props.userName;
//     // const userImg=props.userImg;
//     // const text=props.text;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// // function Message({ userName, userImg, text}) {
// //     // const { userName, userImg, text} = props;
// //     // const userName=props.userName;
// //     // const userImg=props.userImg;
// //     // const text=props.text;
// //     return (
// //         <div className="message d-flex mb-3">
// //             <img src={userImg} />
// //             <div className="message-body">
// //                 <p>{userName}</p>
// //                 <p>{text}</p>
// //             </div>
// //         </div>
// //     )
// // }



// // Clean up the object instead of the individual props

// import CHAT_LOG from '../data/chat_log.json';

// export default function MessagePane(props) {
//     const currentChannel = props.channel;
    
//     const channelMessages = CHAT_LOG.filter((messageObj) => {
//         return messageObj.channel == 'general';
//     })
    
//     const newMappedArray = channelMessages.map ((messageObj) => {
//         const transformed = (
//         // <Message userName={messageObj.userName} userImg={messageObj.userImg} text={messageObj.text}/>
//         <Message messageData={messageObj} key={messageObj.timestamp}/>
//         )
//         return transformed;
//     })
//     return (
//         <div>
//             <h2>Channel: {currentChannel}</h2>
//             {newMappedArray}
//         </div>
//     )
// }

// function Message(props) {
//     const { userName, userImg, text} = props.messageData;
//     return (
//         <div className="message d-flex mb-3">
//             <img src={userImg} />
//             <div className="message-body">
//                 <p>{userName}</p>
//                 <p>{text}</p>
//             </div>
//         </div>
//     )
// }

// onClick
// Clean up the object instead of the individual props

import CHAT_LOG from '../data/chat_log.json';

export default function MessagePane(props) {
    const currentChannel = props.channel;
    
    const channelMessages = CHAT_LOG.filter((messageObj) => {
        return messageObj.channel == 'general';
    })
    
    const newMappedArray = channelMessages.map ((messageObj) => {
        const transformed = (
        // <Message userName={messageObj.userName} userImg={messageObj.userImg} text={messageObj.text}/>
        <Message messageData={messageObj} key={messageObj.timestamp}/>
        )
        return transformed;
    })
    return (
        <div className="mb-4">
            <h2>Channel: {currentChannel}</h2>
            {newMappedArray}
        </div>
    )
}

function Message(props) {
    const { userName, userImg, text} = props.messageData;

    const handleClick= (event)=>{
        console.log("You clicked on" +userName+ " post");
    }

    return (
        <div className="message d-flex mb-3">
            <img src={userImg} />
            <div className="message-body">
                <p>{userName}</p>
                <p>{text}</p>
                <button className="btn btn-light" onClick={handleClick}>&lt;3</button>
            </div>
        </div>
    )
}
