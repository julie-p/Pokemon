import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletAlt } from "@fortawesome/free-solid-svg-icons";

import { connect } from 'react-redux';

function PokemonSearch(props) {

    const API = 'https://pokeapi.co/api/v2/pokemon/';
    const directions = 'Search by name or number (1-807)';
    const example = "example: Vaporeon or 134";

    const [ item, setItem ] = useState();
    const [ name, setName ] = useState('');
    const [ img, setImg ] = useState(null);
    const [ abilities, setAbilities ] = useState([]);
    const [ isActive, setIsActive ] = useState(false);
    const [ input, setInput ] = useState(0);

    useEffect(() => {
        
        const findPokemon = async () => {
            switch (item) {
                case '' : 
                    return null;
                default :
                    const reqFind = await fetch(`${API}${item}`); 
                    const jsonResponse = await reqFind.json();
                    console.log(jsonResponse)
                    setIsActive(true);
                    setName(jsonResponse.name.toUpperCase());
                    setImg(jsonResponse.sprites.front_default);
                    setAbilities(jsonResponse.abilities);
            }
        };           
        findPokemon();
    }, [item]);

    function restart() {
        setName('');
        setImg(null);
        setAbilities([]);
        setIsActive(false);
        setInput(input+1);
    };
    
    return (
        <div className="App" >

        <div className="Pokemon">

            <Link to='/pokedex' className="pokedex">
                <FontAwesomeIcon className="pokedex-icon" icon={faTabletAlt} />
                View your pokedex
            </Link>

            <h1 className="title">
            Pokemon Finder
            </h1>

            <div>

            <p className="directions">
            {directions}
            </p>
            
            <input 
                type="text" 
                placeholder={example}
                onChange={e => {
                setItem(e.target.value.toLowerCase())}}
                key={input}
            />

            <button 
                className='btn-search'
                style={{display: isActive ? "block" : "none"}} 
                onClick={()=> restart()} 
            >
                Start Again
            </button>
            
            </div>

            <div 
            className="results" 
            style={{display: isActive ? "block" : "none"}}
            >

            <img className="img-result" src={img} alt="{item}"/>
            <h2 className="nameSpace">{name}</h2>

            <div className="abilities">
                <p>Abilities</p>

                <ul>
                {abilities.map(e => {
                return <li>{e?.ability?.name}</li>
                })}
                </ul>

            </div>

            </div>

            <button 
            className='btn-search'
            style={{display: isActive ? "block" : "none"}}
            >
                Add to your Pokedex
            </button> 

        </div>
        
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        addPokemon : function(pokemon) {
            dispatch({ type : 'addPokemon', pokemon: pokemon})
        }
    }
};

export default connect(
    null, 
    mapDispatchToProps
)(PokemonSearch);