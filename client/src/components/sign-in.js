import React, { useState } from 'react';
import {useQuery, useMutation} from '@apollo/client'
import { ADD_USER, USER_LOGIN } from '../utils/mutations';
import { GET_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { createSourceEventStream } from 'graphql';

function SignIn ({ user, setUser}) {
    const [formState, setFormState] = useState({username: '', password: '',  email: ''})
    const [addUser, {error}] = useMutation(ADD_USER);
    const [login, {err}] = useMutation(USER_LOGIN);
    
    
    const admin = {
        email: "pete@pete.com",
        password: 'peter'
    }


    const handleNewUser = e => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    } 
    const handleLogin = e => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }
    const ExistingLoginHandler = async e => {
        e.preventDefault();
        
        try {
            const { data } = await login({
                variables: { ...formState } 
            });
            Auth.login(data.login.token)
            console.log(data.login.user._id)
            setUser({id: data.login.user._id, email: data.login.user.email, balance: data.login.user.balance });
            
            

        }
        catch(e) {
            console.error(e);
        }
        setFormState({email: '', password: ''});
    }
    
    const newUserSignup = async (e) => {
        e.preventDefault();
        // const username = event.target.username.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;

        try {
           const { data } = await addUser({
               variables: { ...formState }
           })
           Auth.login(data.addUser.token);
           setUser({email: data.addUser.user.email, balance: data.addUser.user.balance});
        }
        catch(e) {
            console.error(e);
        }
        // console.log(username, email, password)
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
                    <span><input 
                    id="existingUser" 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    value={formState.email} 
                    onChange={handleLogin}
                    required/></span>


                    <label for="password"><b className="pass-title">Password:</b></label>
                    <span><input 
                    type="password" 
                    placeholder="Enter password" 
                    name="password"
                    value={formState.password} 
                    autoComplete="off"
                    onChange={handleLogin}  
                    required/></span>
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
                    <span><input 
                    type="username" 
                    placeholder="Enter username" 
                    name="username" 
                    value={formState.username}
                    onChange={handleNewUser}
                    required/></span>


                    <label for="email" className="pass-title"><b>Email:</b></label>
                    <span><input 
                    type="email" 
                    placeholder="Enter email" 
                    name="email" 
                    value={formState.email}
                    onChange={handleNewUser}
                    required/></span>

                    <label for="password"><b className="pass-title">Password:</b></label>
                    <span><input 
                    type="password" 
                    placeholder="Enter password" 
                    name="password"
                    value={formState.password} 
                    autoComplete="off" 
                    onChange={handleNewUser}
                    required/></span>
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