import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChooseBets from './components/choose-bet';
import ChooseFighter from './components/choose-fighter';
import Fight from './components/fight';
import Login from './components/login';
import Results from './components/results';
<<<<<<< HEAD:client/src/App.js
import Header from './components/header';
import Footer from './components/footer';
import Animation from './components/animation';
import './index.css';



function App() {
  return (
    <div className="flex-project">
      <Header></Header>
      <Animation></Animation>
      <Footer></Footer>
=======
import FighterCards from './components/fightercards';
import Cards from './components/cards';
function App() {
  return (
    <div >
      {/* <ChooseBets></ChooseBets> */}
      <Cards></Cards>
      {/* <ChooseFighter></ChooseFighter>
      <Fight></Fight>
      <Login></Login>
      <Results></Results> */}
>>>>>>> feature/fighters:src/App.js
    </div>
  );
}

export default App;
