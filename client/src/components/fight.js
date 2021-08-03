import React, {useState} from 'react';

function Fight({currentFighter}){
    
    console.log(currentFighter);
    
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
                    <h3>Fighter 2</h3>
                </div>
            </div>
            <div className='poster-bet'>
                <div>
                    <h3>Place Your Bet Here!</h3>
                </div>
                <div>
                    <input type="text" placeholder="$$" />
                </div>
                <div>
                    <button className='submit-btn'> Sumbit!</button>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Fight;