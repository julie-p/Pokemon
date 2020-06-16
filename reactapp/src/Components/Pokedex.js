import React, { useState, useEffect } from 'react';
import '../App.css';

import { connect } from 'react-redux';

function Pokedex(props) {

//    console.log('-------------------------------PROPS', props.myPokemon);

/* Modif du 17 juin : name OK, trouver solution pour img & types */

   useEffect(() => {

    const findPokemon = async() => {
        const response = await fetch(`/wishlist-pokemon?pokemon=${props.myPokemon}`);
        const jsonResponse = await response.json();
           console.log(jsonResponse);
           props.savePokemon(jsonResponse.pokemon);
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
                        
                            <img src={pokemon.img} alt="{pokemon.name}"/>
                            
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