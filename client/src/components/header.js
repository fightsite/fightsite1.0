import React from 'react';
//here is where we pass in the user that is signed in and his current balance
function Header(userBalance) {
    // const balance = userBalance.balance
    console.log(userBalance.userBalance.balance)
    return (
        <div className="header-div">
            <div className="user-info-inside">
                <h2>{userBalance.userBalance.username}</h2>
                <h2>Balance: {userBalance.userBalance.balance}</h2>
            </div>
            <div className="header-inside">
                <h1>Fight Site!</h1>
            </div>
            <div className="user-button">
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default Header;

