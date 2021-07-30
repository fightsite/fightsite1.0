import React from 'react';
import FighterCards from './fightercards';

function Cards () {
    return (
        <div>
            <FighterCards
                fighterName="Timmy Turner"
                // image="placeholder"
                // alt="Picture of fighter"
                quote="Stats"
                >
            </FighterCards>

            <FighterCards
                fighterName="Someone Else"
                quote="Stats"
                >
            </FighterCards>
        </div>
    )
};

export default Cards;