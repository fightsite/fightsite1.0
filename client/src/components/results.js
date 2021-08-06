import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'; 
function Results(user, setUser, userBet, setCurrentFighter){
    const [updateUser, {error}] = useMutation(UPDATE_USER);
    const money = parseInt(user.user.wager)
    console.log(money)
    const quips = [
        "Holy Moly, that was a close one!",
        "Good Effort!",
        "This is what you deserve...",
        "I can't believe it!",
        "Sometimes its just dumb luck",
        "Who saw this coming??",
        "Were you even f*#@ing trying?",
        "Thanks for shopping at *#@-whooping R-US",
        "You seem like more of an indoor kitty cat"
        ]
    // console.log(moneyWon)
    let randomQuip = Math.floor(Math.random() * quips.length);
    let quipChosen  = quips[randomQuip];
    //using math.random to go through results
    //an array to hold results
    const results = [
        'Winner',
        'Loser'
        
    ]
    const bet = [
        'You just won $',
        'You just lost $'
    ]
    
    let randomResult = Math.floor(Math.random() * results.length);
    let resultChosen = results[randomResult];
    let chosenBet;
    // console.log(user.user.wager);
    const endGame = async e => {
        if(resultChosen === results[0]) {
            chosenBet = bet[0];
            try {
                const {data} = await updateUser({
                    variables: { email: user.user.email, balance: money}
                });
                console.log(data.updateUser.balance);
                // setUser({...user, }

            }
            catch(e) {
                console.error(e)
            }
        }
        else{
            chosenBet = bet[1]
        }
        
        


            
    }  
        
        return (
            <div className='results'>
                <div className='quip'> 
                    <h2> {quipChosen} </h2>
                </div>
                <div className="win-or-lose">
                    <h2>{resultChosen}!!!!</h2>
                </div>
                <div className="money">
                    <h2>{chosenBet} </h2>
                </div>
                <div className="results-btn-holder">
                    <button onClick={endGame} className="results-btn">Submit</button>
                </div>
            </div>
        )
}

export default Results;