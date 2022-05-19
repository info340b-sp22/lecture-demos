import Dropdown from 'react-bootstrap/Dropdown';
const DEFAULT_USERS = [null, "monkey", "squirrel", "zebra"]

export default function SignInPage(props) {

    const currentUser = props.user;

    const handleClick = (event) => {
        const whichUser = event.currentTarget.name; //access button, not image
        const userObj = {
            userId: whichUser.toLowerCase() || null,
            userName: whichUser || null
        }
        props.loginFunction(userObj);
    }

    //convenience
    const userButtons = DEFAULT_USERS.map((userName) => {

        return (    
            <Dropdown.Item name={userName} key={userName} onClick={handleClick}>
                <img src={'img/' + userName + '.jpg'} alt={userName + ' avatar'} />
                &nbsp; {userName || "Log out"}
            </Dropdown.Item>
        )

    })

    return (
        <div className="card bg-light">
            <div className="container card-body">
                <div className="lead">Pick a user:
                    <Dropdown>
                        <Dropdown.Toggle variant="light">
                            <img src={'img/' + props.user.userName + '.jpg'} alt={props.user.userName + ' avatar'} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {userButtons}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}