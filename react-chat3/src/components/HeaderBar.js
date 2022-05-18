// //define the HeaderBar component


import Dropdown from 'react-bootstrap/Dropdown';
const DEFAULT_USERS = [null, "monkey", "squirrel", "zebra"]

export default function HeaderBar(props) {

    // const [currentUser, setCurrentUser] = useState({userId:null, userName:null});

    const currentUser = props.currentUser;

    const handleClick = (event) => {
        const whichUser = event.currentTarget.name; //access button, not image
        const userObj = {
            userId: whichUser.toLowerCase() || null,
            userName: whichUser || null
        }
        console.log(userObj);
        // setCurrentUser(userObj);
        props.loginFunction(userObj);
    }

    //convenience
    const userButtons = DEFAULT_USERS.map((userName) => {

        let classList = "btn user-icon";
        if (userName === currentUser.userName) {
            classList += " highlighted"
            return null;
        }

        // return (
        //     <button className={classList} name={userName} key={userName} onClick={handleClick}>
        //         <img src={'img/' + userName + '.jpg'} alt={userName + ' avatar'} />
        //     </button>
        // )

        return (
            <Dropdown.Item className={classList} name={userName} key={userName} onClick={handleClick}>
                <img src={'img/' + userName + '.jpg'} alt={userName + ' avatar'} /> {userName}
            </Dropdown.Item>
        )

    })

    return (
        <header className="container-fluid text-light bg-primary p-1 d-flex justify-content-between">
            <h1>React Messenger</h1>
            <div>

                <Dropdown>
                    <Dropdown.Toggle variant="primary">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {userButtons}
                    </Dropdown.Menu>
                </Dropdown>
                {/* {userButtons} */}
            </div>
        </header>
    )
}