import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'; 
import { gql } from '@apollo/client';

function Fight({user, setUserBalance, setUserBet, currentFighter, randomFighter}){
    const [updateUser, {error}] = useMutation(UPDATE_USER);
    const [formState, setFormState] = useState({email: user.email, balance: user.balance});
 
    
    const submitBet = async e => {
        e.preventDefault();
        console.log(user.balance)
        const currentBalance = user.balance;
        const userBet = e.target.balance.value;
        const updatedBalance = currentBalance - userBet;
        const userID = user.username 
        console.log(userID);
        
        try {
            
            const {data} = await updateUser({
                variables: { email: user.email, balance: updatedBalance }
            });
            setUserBet({balance: userBet});
            setUserBalance({email: data.updateUser.email, balance: data.updateUser.balance, wager: e.target.balance.value});
            
            
        }
        catch(e) {
            console.log(e);
        }

        
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
            <form onSubmit={submitBet} className='poster-bet'>
                <div>
                    <h3>Place Your Bet Here!</h3>
                </div>
                <div>
                    <input type="text" placeholder="$$" name="balance" />
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





