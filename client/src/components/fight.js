import React from 'react';

function Fight(){
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
                    <h3>Fighter 1</h3>
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
            </div>
            </div>
        </main>
    )
}

export default Fight;