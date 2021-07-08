import axios from 'axios';

const getOnePokemon = (name) => {
  // you can put number or a string representation of that pokemon
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toString().toLowerCase()}`)
}

const getKantoPokemon = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
}



export default {
  getKantoPokemon,
  getOnePokemon
};