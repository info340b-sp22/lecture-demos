// // Starting point
// import React from 'react';

// function App() {
//   return (
//     <div>Hello world</div>
//   );
// }

// export default App;

// // Show how to get one component to work, and add some styling
// import { HeaderBar } from './HeaderBar';

// // Buildup Example
// function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList />
//       <MessagePage>
//         <Message text="screm" />
//         <Message text="Here's a photo of Humphrey..."
//       </MessagePage>
//       <ComposeForm />
//     </div>
//   )
// };

// export default App;


// // Now add the HeaderBar component for an initial example

// import { HeaderBar } from './HeaderBar';
// import ChannelList from './ChannelList';

// // Buildup Example
// function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList />
//     </div>
//     // <MessagePage>
//     //   <Message text="screm"/>
//     //   <Message text="Here's a photo of Humphrey..."
//     // </MessagePage>
//     // <ComposeForm/>
//   )
// };

// export default App;

// // Now add the Channel component
// // and add the MessagePane component

// import {HeaderBar } from './HeaderBar';
// import ChannelList from './ChannelList';
// import MessagePane from './MessagePane';

// // Buildup Example
// function App(props) {
//   return (
//  <div>
//       <HeaderBar />
//       <ChannelList />
//       <MessagePane />

//       {/*  <MessagePage>
//          <Message text="screm"/>
//            <Message text="Here's a photo of Humphrey..."
//          </MessagePage>
//          <ComposeForm/> */}
//       </div>
//   )
// };

// export default App;

// // Now lets style the app some

// import { HeaderBar } from './HeaderBar';
// import ChannelList from './ChannelList';
// import MessagePane from './MessagePane';

// // Laying out the App
// function App(props) {
//   return (
//     <div className="container-fluid">
//       <HeaderBar />
//       <div className='row'>
//         <div className='channelList col-2'>
//           <ChannelList />
//         </div>
//         <main className='col'>
//           <MessagePane />
//         </main>
//       </div>

//       {/* <ComposeForm/> */}
//     </div>
//   )
// };

// export default App;

// // Filter Example with channels formatting

// import { HeaderBar } from './HeaderBar';
// import ChannelList from './ChannelList';
// import MessagePane from './MessagePane';

// // Laying out the App
// function App(props) {
//   return (
//     <div className="container-fluid">
//       <HeaderBar />
//       <div className='row'>
//         <div className='channelList col-2'>
//           <ChannelList />
//         </div>
//         <main className='col'>
//           <MessagePane channel="general"/>
//           <MessagePane channel="random"/>
//         </main>
//       </div>

//       {/* <ComposeForm/> */}
//     </div>
//   )
// };

// export default App;

// // Channel List Mapping

// import { HeaderBar } from './HeaderBar';
// import ChannelList from './ChannelList';
// import MessagePane from './MessagePane';

// // Laying out the App
// function App(props) {

//   const channelList = ['general', 'random', 'social', 'birbs', 'channel-5'];
//   return (
//     <div className="container-fluid">
//       <HeaderBar />
//       <div className='row'>
//         <div className='channelList col-2'>
//           <ChannelList channels={channelList} />
//         </div>
//         <main className='col'>
//           <MessagePane channel="general"/>
//           <MessagePane channel="random"/>
//         </main>
//       </div>

//       {/* <ComposeForm/> */}
//     </div>
//   )
// };

// export default App;


// Add a button

import { HeaderBar } from './HeaderBar';
import ChannelList from './ChannelList';
import MessagePane from './MessagePane';

// Laying out the App
function App(props) {

  const channelList = ['general', 'random', 'social', 'birbs', 'channel-5'];

  const whatToDoWhenClicked = function(event){
    console.log('You clicked me');
  }

  return (
    <div className="container-fluid">
      <HeaderBar />
      <div className='row'>
        <div className='channelList col-2'>
          <ChannelList channels={channelList} />
        </div>
        <main className='col'>
          <button className='btn btn-primary' onClick={whatToDoWhenClicked}>Click me!</button>
          <MessagePane channel="general"/>
          <MessagePane channel="random"/>
        </main>
      </div>

      {/* <ComposeForm/> */}
    </div>
  )
};

export default App;

