import React from 'react';
import CSS from "../../src/index.css";

function fighterCards( props ) {
    return (
        <div className="card-parent-div">
            <div className="card">
                <div className="container">
                    {/* Name and stats of fighter on card */}
                    <div>
                        <img className="charPicture" src={ props.charPicture } alt="Picture of selected fighter."/>
                    </div>
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