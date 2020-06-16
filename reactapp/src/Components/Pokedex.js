import React, { useState, useEffect } from 'react';
import '../App.css';

import { connect } from 'react-redux';

function Pokedex(props) {

   console.log('-------------------------------PROPS', props.myPokemon);

   useEffect(() => {

    const findPokemon = async() => {
        const response = await fetch(`/wishlist-pokemon?pokemon=${props.myPokemon}`);
        const jsonResponse = await response.json();
        /* console.log('--------JSON', jsonResponse); */
        props.savePokemon(jsonResponse);
    }
    findPokemon();
}, []);

    return (
        <div>

            <div className="App">

                <div className="Pokemon">

                    <h1 className="title" style={{marginBottom: 20}}>
                    Your Pokedex
                    </h1>

                    <div className="results" >

                    {props.myPokemon.map((pokemon, e) => {

                    return ( 
                        <div className="container">
                        
                            <img src={pokemon.sprites.front_default} alt="{pokemon.name}"/>
                            
                            <div className="body-result">
                                <div className="name-result">
                                    <h5 style={{color:'#000'}}>{pokemon.id} | {pokemon.name.toUpperCase()}</h5>
                                </div>

                                <div className="type-result">
                                    <p>{pokemon.types}</p>
                                </div>
                                
                            </div>
                                
                            
                            
                        </div>
                    )})} 

                    </div>
                    
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
        savePokemon: function(pokemon) {
            dispatch({type: 'savePokemon', pokemon: pokemon})
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