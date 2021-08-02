import React from 'react';
import ChooseFighter from '../components/choose-fighter';
import ChooseBets from '../components/choose-bet';
import Fight from '../components/fight';
import Login from '../components/login';
import Results from '../components/results';
import FighterCards from '../components/fightercards';
import Cards from '../components/cards';
import Header from '../components/header';
import Footer from '../components/footer';
import Animation from '../components/animation';

function HomePage() {
return (
    <div className='flex-project'>
        <Header></Header>
        {/* <ChooseBets></ChooseBets> */}
        <ChooseFighter></ChooseFighter>
        {/* <ChooseFighter></ChooseFighter>
        <Fight></Fight>
        <Login></Login>
        <Results></Results> */}
        <Footer></Footer>
  </div>
)
    
}

export default HomePage;