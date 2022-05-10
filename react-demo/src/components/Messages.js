// function HelloMessage(props) {
//   let propsMessage = props.message;
//   if(props.makeItKnown){
//     propsMessage = propsMessage.toUpperCase();
//   }
//   return <p>{propsMessage}</p>;
// }

// function GoodbyeMessage() {
//   return <p>See ya later!</p>;
// }

// export function MessageList() {
//   return (
//      <div>
//         <HelloMessage message="hey there hello message" makeItKnown={true}/> {/* A HelloMessage component */}
//         <HelloMessage message="Another Message" makeItKnown={false}/> {/* A HelloMessage component */}
//          <GoodbyeMessage /> {/* A GoodbyeMessage component */}
//      </div>
//   );
// }
// const pageContent = (
//   <div>
//   <header className="bg-dark p-3">
//        <h1 id="hello" className="text-light"> Hi Folks</h1>
//      </header>
//   <MessageList/>;
//   </div>
// );

function MessageItem(props) {
  let propsMessage = props.message;
  
  return <p>{propsMessage}</p>;
}

export function MessageList(props) {
  console.log(props);

  const msgComponents = props.messages.map((msgStr) => {
    const elem = <MessageItem message={msgStr} key={msgStr} />; //pass prop down!
    return elem
  })
  

  return (
    <div>
      {msgComponents}
    </div>
  );
}


