import React, { useState } from 'react';
import { GET_USER } from '../utils/queries';
import {useQuery, useMutation} from '@apollo/client'
import { ADD_USER } from '../utils/mutations';

function SignIn ({ user, setUser, newUser, setNewUser}) {
    const [addUser, {error}] = useMutation(ADD_USER);
    const admin = {
        email: "pete@pete.com",
        password: 'peter'
    }
    // const [user, setUser] = useState({email: "", password: ""});
    const ExistingLoginHandler = e => {
        e.preventDefault();
        console.log(e.target.email.value);
        const logInEmail = e.target.email.value;
        const logInPassword = e.target.password.value;
        
        
    }
    
    const newUserSignup = e => {
        e.preventDefault();
        
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(username, email, password)
        // onChange={e => setNewUser({...newUser, username: e.target.value})}  value={newUser.username} 
        //onChange={e => setNewUser({...newUser, email: e.target.value})}  value={newUser.email}
    }

    // const { data } = useQuery(GET_USER);
    // const users = data?.user || [];
    // console.log(users);
    return (
    <main className="login-main-div">  
        <section className="signIn-form-main-container">
            <div className="form-title">
                <h2>Sign in to start the fights!</h2>
            </div>
            <div className="form-info">
                <form onSubmit={ExistingLoginHandler} className="form">

                    <label for="email"><b>Email:</b></label>
                    <span><input id="existingUser" type="text" placeholder="Enter email" name="email"  required/></span>


                    <label for="password"><b className="pass-title">Password:</b></label>
                    <span><input type="password" placeholder="Enter password" name="password" autoComplete="off"  required/></span>
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

                    <span><input type="password" placeholder="Enter username" name="username" required/></span>



                    <label for="email" className="pass-title"><b>Email:</b></label>
                    <span><input type="text" placeholder="Enter email" name="email" required/></span>

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