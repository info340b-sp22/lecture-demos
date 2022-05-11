// export default function ChannelList() {
//     return (
//         <nav className="channel-list bg-secondary text-light py3">
//             <ul>
//                 <li>General</li>
//                 <li>random</li>
//                 <li>Channel 4</li>
//             </ul>
//         </nav>

//     )
// }

// // Add the prop to map channel lists
// export default function ChannelList(props) {

//     const newLiArray = props.channels.map((channelNameStrings) => {
//         const elem = <li>{channelNameStrings}</li>;
//         return elem;
//     })


//     return (
//         <nav className="channel-list bg-secondary text-light py3">
//             <ul>
//                 {newLiArray}
//             </ul>
//         </nav>

//     )
// }

// Fix the warning by adding the key
export default function ChannelList(props) {

    const newLiArray = props.channels.map((channelNameStrings) => {
        const elem = <li key={channelNameStrings}>{channelNameStrings}</li>;
        return elem;
    })

    return (
        <nav className="channel-list bg-secondary text-light py3">
            <ul>
                {newLiArray}
            </ul>
        </nav>

    )
}