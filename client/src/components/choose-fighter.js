import React, {useState} from 'react';
// import fighterCards from './fightercards';
import timmyTurner from '../../src/assets/timmyturner.png';
import morganFreeman from '../../src/assets/morganfreeman.png.jpg';
import nicolasCage from '../../src/assets/nickcage.png';
import jonahHill from '../../src/assets/jonahhill.png';
import carrieUnderwood from '../../src/assets/carrieunderwood.PNG';
import kittyPurry from '../../src/assets/kittypurry.jpg';
import bettyWhite from '../../src/assets/bettywhite.jpg';
import bruceCampbell from '../../src/assets/brucecampbell.jpg';
import burtReynolds from '../../src/assets/burtreynolds.jpg';
import bender from '../../src/assets/bender.png';
import johnnyBravo from '../../src/assets/johnnybravo.png';
import bobTheBuilder from '../../src/assets/bobthebuilder.jpg';
import god from '../../src/assets/god.jpg';
import masterChief from '../../src/assets/masterchief.jpg';
import littleFoot from '../../src/assets/littlefoot.jpg';
import superman from '../../src/assets/superman.png';
import nathanDrake from '../../src/assets/nathandrake.png';
import willFerrell from '../../src/assets/willferrell.jpg';
import { get } from 'mongoose';

function ChooseFighter({currentFighter, setCurrentFighter, setRandomFighter}){
    


    
const fighterCards = [
    {
        charImage: timmyTurner,
        alt:"Picture of Timmy Turner.",
        fighterName:"Timmy Turner",
        strength:"Str: 10",
        speed:"Spd: 18",
        weight:"Wgt: 31 lbs" 
    },
    {
        charImage: morganFreeman,
        alt:"Picture of Morgan Freeman.",
        fighterName:"Morgan Freeman",
        strength:"Str: 14",
        speed:"Spd: 9",
        weight:"Wgt: 191 lbs"
    },
    {
        charImage: bettyWhite,
        alt:"Picture of Betty White",
        fighterName:"Betty White",
        strength:"Str: 10,000",
        speed:"Spd: 102",
        weight:"Wgt: 96 lbs"
    },
    {   
        charImage: nicolasCage,
        alt:"Picture of Nicolas Cage",
        fighterName:"Nicolas Cage",
        strength:"Str: 45",
        speed:"Spd: 13",
        weight:"Wgt: 250 lbs"
    },
    {   
        charImage: jonahHill,
        alt:"Picture of Jonah Hill",
        fighterName:"Jonah Hill",
        strength:"Str: 3",
        speed:"Spd: .01",
        weight:"Wgt: 352 lbs"
    },
    {   
        charImage: carrieUnderwood,
        alt:"Picture of Carrie Underwood",
        fighterName:"Carrie Underwood",
        strength:"Str: 12",
        speed:"Spd: 75",
        weight:"Wgt: 136 lbs"
    },
    {   
        charImage: kittyPurry,
        alt:"Picture of Kitty Purry",
        fighterName:"Kitty Purry",
        strength:"Str: 0",
        speed:"Spd: 1",
        weight:"Wgt: 9 lbs"
    },
    {   
        charImage: bruceCampbell,
        alt:"Picture of Bruce Campbell",
        fighterName:"Bruce Campbell",
        strength:"Str: 455",
        speed:"Spd: 60",
        weight:"Wgt: 200 lbs"
    },
    {   
        charImage: burtReynolds,
        alt:"Picture of Burt Reynolds",
        fighterName:"Burt Reynolds",
        strength:"Str: 8000",
        speed:"Spd: 8000",
        weight:"Wgt: 225 lbs"
    },
    {   
        charImage: bender,
        alt:"Picture of Bender",
        fighterName:"Bender",
        strength:"Str: 9500",
        speed:"Spd: 500",
        weight:"Wgt: 600 lbs"
    },
    {   
        charImage: johnnyBravo,
        alt:"Picture of Johnny Bravo",
        fighterName:"Johnny Bravo",
        strength:"Str: 250",
        speed:"Spd: 2",
        weight:"Wgt: 234 lbs"
    },
    {   
        charImage: bobTheBuilder,
        alt:"Picture of Bob the Builder",
        fighterName:"Bob the Builder",
        strength:"Str: 80",
        speed:"Spd: 15",
        weight:"Wgt: 76 lbs"
    },
    {   
        charImage: god,
        alt:"Picture of God",
        fighterName:"God",
        strength:"Str: 9999",
        speed:"Spd: ???",
        weight:"Wgt: ??? lbs"
    },
    {   
        charImage: masterChief,
        alt:"Picture of Master Chief",
        fighterName:"Master Chief",
        strength:"Str: 250",
        speed:"Spd: 50",
        weight:"Wgt: 605 lbs"
    },
    {   
        charImage: littleFoot,
        alt:"Picture of Little Foot",
        fighterName:"Little Foot",
        strength:"Str: 5",
        speed:"Spd: 5",
        weight:"Wgt: 110 lbs"
    },
    {   
        charImage: superman,
        alt:"Picture of Superman",
        fighterName:"Superman",
        strength:"Str: 9998",
        speed:"Spd: 9854642452585.64",
        weight:"Wgt: 220 lbs"
    },
    {   
        charImage: nathanDrake,
        alt:"Picture of Nathan Drake",
        fighterName:"Nathan Drake",
        strength:"Str: 100",
        speed:"Spd: 100",
        weight:"Wgt: 210 lbs"
    },
    {   
        charImage: willFerrell,
        alt:"Picture of Will Ferrell",
        fighterName:"Will Ferrell",
        strength:"Str: 56",
        speed:"Spd: 56",
        weight:"Wgt: 245 lbs"
    }
]
    
    function handleClick(i) {
        setCurrentFighter({name: i.fighterName})

    }

    function randomOpponent(){
        let randomFighter = Math.floor(Math.random() * fighterCards.length);
        let chosenOpponent = fighterCards[randomFighter].fighterName;
        setRandomFighter({name: chosenOpponent})
        console.log(chosenOpponent)
    }
    


    return (
        <section>
            <div className="choose-fighter-title">
                <h2>Choose your fighter:</h2>
            </div>
            <div id="parent" className="card-parent-div">
                { fighterCards.map((i) => (
                    <div   className="card">
                        <div  onClick={() => {handleClick(i); randomOpponent()}} className="container">
                            <img className="charImage" src={ i.charImage } alt={ i.alt }/>
                            <h2 id="fightName"><b>{ i.fighterName }</b></h2>
                            <p>{ i.strength }</p>
                            <p>{ i.speed }</p>
                            <p>{ i.weight }</p>
                        </div>
                    </div>
                    ))}
            </div>
        </section>    
    )


}

export default ChooseFighter;
