import React from 'react';
import CSS from "../../src/index.css";

function fighterCards( props ) {
    return (
        // <div className="fight-card">
        //     <h2>{ card.fighterName }</h2>
        //     <a href="#">link</a>
        // </div>


        <div className="card-parent-div">
            <div className="card">
                <div className="container">
                    {/* Name and stats of fighter on card */}
                    <h2><b>{ props.fighterName }</b></h2>
                    <p>{ props.strength }</p>
                    <p>{ props.speed }</p>
                    <p>{ props.weight }</p>
                </div>
            </div>
        </div>



    )
};

export default fighterCards;