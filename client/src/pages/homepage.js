import React from 'react';
import ChooseFighter from '../components/choose-fighter';
import Fight from '../components/fight';
import Results from '../components/results';
import Header from '../components/header';
import Footer from '../components/footer';
import Animation from '../components/animation';
import SignIn from '../components/sign-in';
import { useState } from 'react'


function HomePage({}) {
    

    const [user, setUser] = useState({id: "", email: "", password: "", balance: ""});
    const [newUser, setNewUser] = useState({username: "", email: "", password: ""});
    const [currentFighter, setCurrentFighter] = useState({name: ""});
    const [userBet, setUserBet] = useState("");
    const [randomFighter, setRandomFighter] = useState({name: ""});
    const [error, setError] = useState("");
    
    console.log(userBet);
    console.log(user);
    let pageContent; 
    if(user.email==="" && currentFighter.name==="" && userBet === "") {
        pageContent = <SignIn user={user} setUser={setUser} newUser={newUser} setNewUser={setNewUser} ></SignIn>
        console.log(randomFighter);
       
    }
    else if(user.email != "" && currentFighter.name === "" && userBet === "") {
        pageContent = <ChooseFighter currentFighter={currentFighter} setCurrentFighter={setCurrentFighter} setRandomFighter={setRandomFighter}></ChooseFighter>

    }
    else if(user.email != "" && currentFighter.name != "" && userBet === "") {
        pageContent = <Fight user={user} setUserBalance={setUser} setUserBet={setUserBet} currentFighter={currentFighter} randomFighter={randomFighter} ></Fight>
    }
    else {
        pageContent = <Results></Results>
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