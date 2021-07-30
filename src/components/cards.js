import React from 'react';
import FighterCards from './fightercards';

function Cards () {
    return (
        <div>
            <FighterCards
                fighterName="Timmy Turner"
                // image="placeholder"
                // alt="Picture of fighter"
                quote="I'll chop your head off!!"
                >
            </FighterCards>

            <FighterCards
                fighterName="Someone Else"
                quote="I am an enemy!"
                >
            </FighterCards>
        </div>
    )
};

export default Cards;