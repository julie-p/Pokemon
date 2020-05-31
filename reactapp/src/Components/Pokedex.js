import React, { useState, useEffect } from 'react';
import '../App.css';

import { connect } from 'react-redux';

function Pokedex(props) {

   console.log(props.myPokemon); 

    useEffect(() => {

        const findPokemon = async() => {
            const response = await fetch(`/wishlist-pokemon?pokemon=${props.myPokemon}`);
            const jsonResponse = await response.json();
            /* console.log(jsonResponse); */
            props.savePokemon(jsonResponse.pokemon);
        }
        findPokemon();
    }, []);
    return(
        <div>

            <div className="App">
                <div className="Pokemon">

                    <div className="results" >

                    {/* {props.myPokemon.map((pokemon, e) => {

                    return ( */}
                        <div className="container">

                            <div className="img-result">
                            <img />
                            </div>

                            <div className="body-result">
                                <h5 className="name-result"></h5>
                                <p className="type-result"></p>
                            </div>
                                
                            
                            
                        </div>
                    {/* )})} */}

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