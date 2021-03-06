

import {Link} from 'react-router-dom';      //Example 6

export default function ChannelNav(props) {

  
  const newLiArray = props.channels.map((channelNameString) => {
    const elem = (
      <li className="list-item" key={channelNameString}>
        <Link to={"/app/chat/"+channelNameString}>#{channelNameString}</Link>
      </li>
      );
    return elem;
  })

  return (
    <nav className="channel-list bg-secondary text-light py-3 h-100">
      <ul>
        {newLiArray}
      </ul>
    </nav>
  )
}