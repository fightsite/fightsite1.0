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
                {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"></img> */}
                <div className="container">
                    <h4><b>{ props.fighterName }</b></h4>
                    <p>{ props.quote }</p>
                </div>
            </div>
        </div>



    )
};

export default fighterCards;