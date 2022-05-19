import React from 'react';

export function WelcomePage(props) {
    return (
        <div className="card bg-light">
            <div className="container card-body">
                <h2>Welcom to React Messenger!</h2>
                <p>The latest and greatest messaging app</p>
                <p><a href="/signin">Sign in to get started!</a></p>
            </div>

        </div>
    )
}

export function AboutPage() {
    return (
        <div className="card bg-warning bg-gradient">
            <div className="container card-body">
                <h2>About React Messenger</h2>
                <p>Here's some text about the React Messenger which was built as a demo in info340</p>
            </div>
        </div>

    );
}

export function ErrorPage() {
    return <p className="alert alert-danger">Page Not Found</p>
}