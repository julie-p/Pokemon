var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    type: String
}); 

var pokemonModel = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemonModel;