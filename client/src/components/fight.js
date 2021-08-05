import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'; 
import { gql } from '@apollo/client';

function Fight({user, setUserBalance, setUserBet, currentFighter, randomFighter}){
    const [updateUser, {error}] = useMutation(UPDATE_USER);
    const [formState, setFormState] = useState({email: user.email, balance: user.balance})
    // console.log(currentFighter);
    // const userBet = e.target.bet.value;
    // const currentBalance = user.balance;
    // const currentUser = user.email;
    
    const placeBetHandler = async e => {
        const { name, value } = e.target;
        console.log(e.target)
        const userBalance = 10;
        let updateBalance = userBalance - value;
        console.log(updateBalance)
        await setFormState(prevFormState => {
            return {
            ...prevFormState,
            balance: updateBalance
            }
        })
        console.log(formState.balance)
        
        
        
    }
  
    const submitBet = async e => {
        e.preventDefault();
        try {
            
            const { data } = await updateUser({
                variables: { ...formState }
            });
            console.log(data);
            setUserBalance({ balance: data.updateUser.balance})
        }
        catch(e) {
            console.error(e);
        }
        // try {
        //     const { data } = await updateUser({
        //         email: user.email,
        //         balance: 3
        //     });
        //     console.log(data.updateUser.balance);
        // }
        // catch(e) {
        //     console.error(e, 'ok');
        // }
        
    }

        
        // try {
        //     const { data } = await updateUser({
                
        //     })
        // }
        // const updateBalanceFetch = async (currentUser, updatedBalance) => {
        //     const query =JSON.stringify({
        //         query: `mutation {
        //             updateUser(
        //                 email: ${currentUser},
        //                 balance: ${updatedBalance}) { email }
        //             )
        //         }`
        //     });
        //     const response = await fetch('http://localhost:3001/graphql', {
        //         headers: { 'content=type': 'application/json'},
        //         method: 'POST',
        //         body: query,
        //     });
        //     const responseJson = await response.json();
        //     console.log(responseJson.data)
        // }
        // updateBalanceFetch(currentUser, updatedBalance);
        // try {
        //     const { data } =  updateUser({
        //         variables: {
        //             email: currentUser,
        //             balance: updatedBalance
        //         }
        //     });
        //     console.log(data);
        // }
        // catch(e) {
        //     console.error({e})
        // }
        // keep track of what the user bets
        // setUserBet(userBet);
        
       
            
            

        
        
    
    return (
        <main className='poster-holder'>
            <div className='poster'>
                <div className="poster-top">
                    <h2>EXTRA! EXTRA! EXTRA!</h2>
                </div>
            <div className='poster-exclusive'>
                    <span> NOW SHOWING</span>
                    <h3>The FIGHT of the Century!!!</h3>
            </div>
            <div className='poster-fighters'>
                <div>
                    <h3>{currentFighter.name}</h3>
                </div>
                <div>
                    <h3>VS</h3>
                </div>
                <div>
                    <h3>{randomFighter.name}</h3>
                </div>
            </div>
            <form onSubmit={submitBet} className='poster-bet'>
                <div>
                    <h3>Place Your Bet Here!</h3>
                </div>
                <div>
                    <input onChange={placeBetHandler}type="text" placeholder="$$" name="balance" />
                </div>
                <div>
                    <button  type="submit" className='submit-btn'> Sumbit!</button>
                </div>
            </form>
            </div>
        </main>
    )
}

export default Fight;