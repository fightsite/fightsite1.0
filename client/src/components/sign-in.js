import React, { useState } from 'react';


function SignIn ({ LogIn, signUp, error }) {
    
    const [userInfo, setUserInfo] = useState({email: "", password: ""});
    const [newUser, setNewUser] = useState({ username: "", email: "", password: ""});
    const [currentFighter, setCurrentFighter] = useState({fighterName: ""});
    const existingLoginHandler = e => {
        e.preventDefault();
        console.log('signinjs');
        LogIn(userInfo)
    }

    const newUserSignup = e => {
        e.preventDefault();
        console.log('signupjs');
        signUp(newUser);
    }
    return (
    <main className="login-main-div">  
        <section className="signIn-form-main-container">
            <div className="form-title">
                <h2>Sign in to start the fights!</h2>
            </div>
            <div className="form-info">
                <form onSubmit={existingLoginHandler} className="form">
                    <label for="email" className="pass-title"><b>Email:</b></label>
                    <span><input id="existingUser" type="text" placeholder="Enter email" name="email" onChange={e => setUserInfo({...userInfo, email: e.target.value})} value={userInfo.email} required/></span>

                    <label for="password"><b className="pass-title">Password:</b></label>
                    <span><input type="password" placeholder="Enter password" name="password" autoComplete="off" onChange={e => setUserInfo({...userInfo, password: e.target.value})} value={userInfo.password} required/></span>
                    <div className="btn-div">
                        <button id="login" className="signIn-btns" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </section>
        <section className="divider">
            <div>
                <h2 className="divider-message">Don't have an account? No Problem!</h2>
            </div>
        </section>
        <section className="signIn-form-main-container">
            <div className="form-title">
                <h2>Sign up with us now!</h2>
            </div>
            <div className="form-info">

                <form onSubmit={newUserSignup} className="form">
                <label for="username"><b className="pass-title">Create Username:</b></label>
                    <span><input type="password" placeholder="Enter username" name="username" onChange={e => setNewUser({...newUser, username: e.target.value})}  value={newUser.username} required/></span>


                    <label for="email" className="pass-title"><b>Email:</b></label>
                    <span><input type="text" placeholder="Enter email" name="email" onChange={e => setNewUser({...newUser, email: e.target.value})}  value={newUser.email} required/></span>

                    <label for="password"><b className="pass-title">Password:</b></label>
                    <span><input type="password" placeholder="Enter password" name="password" autoComplete="off" onChange={e => setNewUser({...newUser, password: e.target.value})}  value={newUser.password} required/></span>
                    <div className="btn-div">
                        <button className="signIn-btns" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </section>
    </main>      
    )
};

export default SignIn;