const axios = require('axios');

var getPokemonData = (name) => axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`);



module.exports = {
  getPokemonData
};