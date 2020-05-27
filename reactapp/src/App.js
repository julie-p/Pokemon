import React from 'react';
import './App.css';
import PokemonSearch from './Components/PokemonSearch';
import Pokedex from './Components/Pokedex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Switch>
    <Route path='/' exact component={PokemonSearch}/>
    <Route path='/pokedex' exact component={Pokedex}/>
    </Switch>
  </Router>
  );
};

export default App;