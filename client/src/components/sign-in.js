import React from 'react';

function signIn () {
    return (
        <section className="signIn-form-main-container">
            <div className="form-title">
                <h2>Sign up to start the fights!</h2>
            </div>
            <div className="form-info">
                <form className="form">
                    <label for="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter email" name="email" required/>

                    <label for="password"><b>Password:</b></label>
                    <input type="password" placeholder="Enter password" name="password" required/>

                    <button type="submit">Create Account</button>
                </form>
            </div>
        </section>
    )
};

export default signIn;