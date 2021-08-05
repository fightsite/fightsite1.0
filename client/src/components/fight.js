import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'; 
import { gql } from '@apollo/client';

function Fight({user, setUserBalance, setUserBet, currentFighter, randomFighter}){
    const [updateUser, {error}] = useMutation(UPDATE_USER);
    const [formState, setFormState] = useState({email: user.email, balance: ''})
    // console.log(currentFighter);
    // const userBet = e.target.bet.value;
    // const currentBalance = user.balance;
    // const currentUser = user.email;
    
    // const { data } = updateUser({
    //     variables : {
    //         email: "pete@pete.com",
    //         balance: 4
    //     }
    // });
    
    // console.log(data);
    // const placeBetHandler = e => {
    //     const { name, value } = e.target;
    //     const userBalance = 10;
    //     const updateBalance = userBalance - value;
        
    //     setFormState({
    //         ...formState,
    //         [name]: updateBalance
    //     });
        
    // }
    const submitBet = async e => {
        e.preventDefault();
        console.log(user.email, user.balance);
        const userEmail = user.email;
        const balance = user.balance
        // console.log(formState);
        try {
            const { data } = updateUser({ 
                variables: {
                    email: userEmail,
                    balance: balance
                }
            });
           
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
//  onChange={placeBetHandler} value={formState.value}
export default Fight;
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




