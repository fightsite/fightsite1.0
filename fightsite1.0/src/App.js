import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChooseBets from './components/choose-bet';
import ChooseFighter from './components/choose-fighter';
import Fight from './components/fight';
import Login from './components/login';
import Results from './components/results';
function App() {
  return (
    <div >
      <ChooseBets></ChooseBets>
      <ChooseFighter></ChooseFighter>
      <Fight></Fight>
      <Login></Login>
      <Results></Results>
    </div>
  );
}

export default App;
