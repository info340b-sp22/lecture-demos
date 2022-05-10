
// import from other components; Messages.js, etc
import {  MessageList } from './Messages'
const messagesArray = ["Hello world", "No borders", "Go huskies!"];
// declare a function component
export default function App() {
  return (
    <MessageList messages={messagesArray} /> 
  )
}

