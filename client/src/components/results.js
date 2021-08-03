import React from 'react';

function Results(){

//an array to hold one liners
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
    //using math.random to go through one liners  
    let randomQuip = Math.floor(Math.random() * quips.length);
    let quipChosen  = quips[randomQuip];
        
    //an array to hold results
    const results = [
        'Winner',
        'Loser'
    ]
    //using math.random to go through results
    let randomResult = Math.floor(Math.random() * results.length);
    let resultChosen = results[randomResult]

    return (
        <div className='results'>
            <div className='quip'> 
                <h2> {quipChosen} </h2>
            </div>
            <div className="win-or-lose">
                <h2>{resultChosen}!!!!</h2>
            </div>
            <div className="money">
                <h2>You just won $500! </h2>
            </div>
            <div className="results-btn-holder">
                <button className="results-btn">Play Again</button>
            </div>
         </div>
    )
}

export default Results;