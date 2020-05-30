import React, { useState, useEffect } from 'react';
import '../App.css';

import { connect } from 'react-redux';

function Pokedex() {
    return(
        <div>

            <div className="App">
                <div className="Pokemon">
                    
                </div>
            </div>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        myPokemon: state.pokemonList
    }
};

function mapDispatchToProps(dispatch) {
    return {
        savePokemon: function(pokemons) {
            dispatch({type: 'savePokemon', pokemons: pokemons})
        },
        deletePokemon:  function(name) {
            dispatch({type: 'deletePokemon', name: name})
        }
    }
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Pokedex);