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
    

    const [user, setUser] = useState({email: "", password: ""});
    const [currentFighter, setCurrentFighter] = useState({name: ""});
    const [userBet, setUserBet] = useState("");
    const [error, setError] = useState("");
    

    let pageContent = <SignIn user={user} setUser={setUser} error={error} ></SignIn>
    if(user.email!="" && currentFighter.name!="") {
        pageContent = <Fight currentFighter={currentFighter} ></Fight>
    }
    else if(user.email!="" && currentFighter.name==="") {
        pageContent = <ChooseFighter currentFighter={currentFighter} setCurrentFighter={setCurrentFighter}></ChooseFighter>
    }
    else {
        pageContent = <SignIn user={user} setUser={setUser} error={error} ></SignIn>
    }
    
    console.log(currentFighter);
        return (
            <div className='flex-project'>
                <Header></Header>

                {/* <SignIn></SignIn> */}
                {/* <SignIn user={user} setUser={setUser} LogIn={login} signUp={createUser} error={error} ></SignIn> */}
                {pageContent}
                {/*                 
                <ChooseFighter getFighter={getFighter}></ChooseFighter>
               
                <SignIn LogIn={login} signUp={createUser} error={error} ></SignIn> */}

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