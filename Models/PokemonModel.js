var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
    id: Number,
    name: String,
    sprites: [String],
    types: [String]
}); 

var pokemonModel = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemonModel;