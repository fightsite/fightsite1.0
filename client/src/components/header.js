import React from 'react';
//here is where we pass in the user that is signed in and his current balance
function Header() {
    return (
        <div className="header-div">
            <div className="user-info-inside">
                <h2>Username</h2>
                <h2>Balance: $5,000</h2>
            </div>
            <div className="header-inside">
                <h1>Fight Site!</h1>
            </div>
            <div className="user-button">
                <button>Sign in</button>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default Header;

