//define the HeaderBar component

const DEFAULT_USERS = [null, "monkey", "squirrel", "zebra" ]


export default function HeaderBar(props) {

    //convenience
    const userButtons = DEFAULT_USERS.map((userName) => {
        return (
            <button className="btn user-icon" name={userName} key={userName}>
                <img src={'img/'+userName+'.jpg'} alt={userName+' avatar'} />
            </button>
        )
    })

    return (
        <header className="container-fluid text-light bg-primary p-1 d-flex justify-content-between">
            <h1>React Messenger</h1>
            <div>
                {userButtons}
            </div>
        </header>
    )

}