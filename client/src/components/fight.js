import React, {useState} from 'react';

function Fight({setUserBet, currentFighter, randomFighter}){
    
    console.log(currentFighter);
    
    const placeBetHandler = e => {
        e.preventDefault();
        const userBet = e.target.bet.value;
        setUserBet(userBet);
        
        //
        //fetch for bet
        //take away user bet +
        // In
        //return if results are win || keep if results are lose
        
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