import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'; 

function Fight({user, setUserBalance, setUserBet, currentFighter, randomFighter}){
    const [updateUser, {error}] = useMutation(UPDATE_USER);

    // console.log(currentFighter);
    
    const placeBetHandler = e => {
        e.preventDefault();
        const userBet = e.target.bet.value;
        const currentBalance = user.balance;
        const currentUser = user.email;
        
        const updatedBalance = currentBalance - userBet;

        console.log(currentUser);
        // keep track of what the user bets
        setUserBet(userBet);
        
       
            const { data } =  updateUser({
                variables: {
                    email: currentUser,
                    balance: updatedBalance
                }
            });
            console.log(data);

        
        
    }
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
            <form onSubmit={placeBetHandler} className='poster-bet'>
                <div>
                    <h3>Place Your Bet Here!</h3>
                </div>
                <div>
                    <input type="text" placeholder="$$" name="bet" />
                </div>
                <div>
                    <button type="submit" className='submit-btn'> Sumbit!</button>
                </div>
            </form>
            </div>
        </main>
    )
}

export default Fight;