import axios from 'axios';

const getOnePokemon = (name, cb) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toString().toLowerCase()}`)
  .then((result) => {
    cb(result.data);
  })
  .catch((err) => {
    console.log('error', err);
    cb('error');
  });
}

const getKantoPokemon = (cb) => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then((result) => {
    console.log('all pokemon result', result);
    cb(result.data.results);
  })
  .catch((err) => {
    cb('error');
  })
}



export default {
  getKantoPokemon,
  getOnePokemon
};