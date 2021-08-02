import React from 'react';

function signIn () {
    return (
    <main className="login-div">  
        <section className="signIn-form-main-container1">
            <div className="form-title">
                <h2>Sign in to start the fights!</h2>
            </div>
            <div className="form-info">
                <form className="form">
                    <label for="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter email" name="email" required/>

                    <label for="password"><b className="pass-title">Password:</b></label>
                    <input type="password" placeholder="Enter password" name="password" required/>
                    <div className="btn-div">
                        <button className="signIn-btns" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </section>
        <section className="divider">
            <h2>Don't have an account? No Problem!</h2>
        </section>
        <section className="signIn-form-main-container2">
            <div className="form-title">
                <h2>Sign up with us now!</h2>
            </div>
            <div className="form-info">
                <form className="form">
                    <label for="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter email" name="email" required/>

                    <label for="password"><b className="pass-title">Password:</b></label>
                    <input type="password" placeholder="Enter password" name="password" required/>
                    <div className="btn-div">
                        <button className="signIn-btns" type="submit">Create Account</button>
                    </div>
                </form>
            </div>
        </section>
    </main>      
    )
};

export default signIn;