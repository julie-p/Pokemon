export default function(pokemonList= [], action) {

    let pokemonListCopy = [...pokemonList];

    switch (action.type) {
        case 'addPokemon':
            let findPokemon = pokemonList.every(e => e.name !== action.pokemon.name);
            if (!findPokemon) {
                pokemonListCopy.push(action.pokemon);
            };
            return pokemonListCopy;

        case 'savePokemon':
            return action.pokemons;

        case 'deletePokemon':
            pokemonListCopy = pokemonList.filter(e => e.name !== action.name);
            return pokemonListCopy;

        default: 
            return pokemonList;
    }

};