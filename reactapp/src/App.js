import React from 'react';
import './App.css';
import PokemonSearch from './Components/PokemonSearch';
import Pokedex from './Components/Pokedex';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import pokemonList from './reducers/pokemon.reducer';

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
const store = createStore(combineReducers({pokemonList}));

function App() {
  return (

  <Provider store={store}>
    <Router>
      <Switch>
      <Route path='/' exact component={PokemonSearch}/>
      <Route path='/pokedex' exact component={Pokedex}/>
      </Switch>
    </Router>
  </Provider>
  );
};

export default App;