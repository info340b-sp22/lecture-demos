
export default function NavBar(props) {
    return (

        <header className="container-fluid text-light bg-primary px-1 d-flex justify-content-between">
            <h1>React Messenger</h1>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="signin">
                        <img src={'img/' + props.user.userName + '.jpg'} alt={props.user.userName + "avatar"} />
                    </a>
                </li>
            </ul>
        </header>
    )
}
