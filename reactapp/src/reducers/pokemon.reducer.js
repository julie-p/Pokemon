export default function(pokemonList= [], action) {

    let pokemonListCopy = [...pokemonList];

    switch (action.type) {
        case 'addPokemon':
            return [...pokemonList, action.pokemon];

        case 'savePokemon':
            return action.pokemon;

        case 'deletePokemon':
            pokemonListCopy = pokemonList.filter(e => e.name !== action.name);
            return pokemonListCopy;

        default: 
            return pokemonList;
    }

};