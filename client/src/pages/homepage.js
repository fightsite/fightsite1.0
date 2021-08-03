import React from 'react';
import ChooseFighter from '../components/choose-fighter';
import ChooseBets from '../components/choose-bet';
import Fight from '../components/fight';
import Results from '../components/results';
import FighterCards from '../components/fightercards';
import Cards from '../components/cards';
import Header from '../components/header';
import Footer from '../components/footer';
import Animation from '../components/animation';
import SignIn from '../components/sign-in';
import { useState } from 'react'

function HomePage({}) {
    const admin = {
        email: "pete@pete.com",
        password: 'peter'
    }

    const [user, setUser] = useState({email: ""});
    const [currentFighter, setCurrentFighter] = useState({name: ""});
    const [error, setError] = useState("");

    const login = userInfo => {
        
        if(userInfo.email === admin.email && userInfo.password === admin.password) {
            setUser({ email: userInfo.email });
            console.log('you made it');
        }
        else {
            console.log('idiot');
        }
    }
    const getFighter = fighterInfo => {
        console.log(fighterInfo);
    }
    const logout = () => {
        console.log("logout");
    }

    const createUser = (details) => {
        

    }
return (
    <div className='flex-project'>
        <Header></Header>

        {/* <SignIn></SignIn> */}

        {(user.email != "") ? (
           <ChooseFighter getFighter={getFighter}></ChooseFighter>
        ) : (
            <SignIn LogIn={login} signUp={createUser} error={error} ></SignIn>
            
        )}
        {/* {(user.email && currentFighter.name)} */}
        

        {/* <ChooseBets></ChooseBets> */}
        
        {/* <FighterCards></FighterCards> */}
        {/* <Fight></Fight> */}
        {/* <Login></Login> */}
        {/* <Results></Results> */}
        <Footer></Footer>
  </div>
)
    
}

export default HomePage;