import React from 'react';
import ChooseFighter from '../components/choose-fighter';
import Fight from '../components/fight';
import Results from '../components/results';
import Header from '../components/header';
import Footer from '../components/footer';
import Animation from '../components/animation';
import SignIn from '../components/sign-in';
import { useState } from 'react'

function HomePage() {
    const admin = {
        email: "pete@pete.com",
        password: 'peter'
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const login = userInfo => {
        console.log(userInfo);
        if(userInfo.email === admin.email && userInfo.password === admin.password) {
            setUser({ email: userInfo.email });
            console.log('you made it');
        }
        else {
            console.log('idiot');
        }
    }

    const logout = () => {
        console.log("logout");
    }

    const createUser = (details) => {
        

    }
return (
    <div className='flex-project'>
        <Header></Header>
        <ChooseFighter></ChooseFighter>
        {/*(user.email != "") ? (
           <Animation></Animation>
        
        ) : (
            <SignIn LogIn={login} signUp={createUser} error={error} ></SignIn>
            
        )}
        
        {/* <ChooseBets></ChooseBets> */}
        {/* <ChooseFighter></ChooseFighter>
        <Fight></Fight>
        <Login></Login>
        <Results></Results> */}
        <Footer></Footer>
  </div>
)
    
}

export default HomePage;