import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChooseBets from './components/choose-bet';
import ChooseFighter from './components/choose-fighter';
import Fight from './components/fight';
import Login from './components/login';
import Results from './components/results';
import FighterCards from './components/fightercards';
import Cards from './components/cards';
import Header from './components/header';
import Footer from './components/footer';
import Animation from './components/animation';
import SignIn from './components/sign-in';

function App() {
  return (
    <div className='flex-project'>
      <Header></Header>
      <SignIn></SignIn>
      {/* <ChooseBets></ChooseBets> */}
      {/* <ChooseFighter></ChooseFighter> */}
      {/* <ChooseFighter></ChooseFighter>
      <Fight></Fight>
      <Login></Login>
      <Results></Results> */}
      <Footer></Footer>
    </div>
  );
}

export default App;