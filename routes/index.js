var express = require('express');
var router = express.Router();
var pokemonModel = require('../Models/PokemonModel');

router.post('/wishlist-pokemon', async function(req, res, next) {

  const newPokemon = new pokemonModel({
    id: req.body.id,
    name: req.body.name, 
    img: req.body.img,
    type: req.body.type
  });

  const pokemon = await newPokemon.save();

  let result = false;
  if (pokemon.name) {
    result = true;
  };

  res.json({result, pokemon});
});

router.delete('/wishlist-pokemon/:name', async function(req, res, next) {

  const pokemonDelete = await pokemonModel.deleteOne({name: req.params.name});

  let result = false;
  if (pokemonDelete.deletedCount === 1) {
    result = true;
  };

  res.json({result, pokemonDelete});
});

router.get('/wishlist-pokemon', async function(req, res, next) {

  const pokemon = await pokemonModel.find();

  res.json({pokemon});
});

module.exports = router;
