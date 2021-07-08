import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './api/api.js'
import PokeModal from './Components/PokeModal.js';
import "regenerator-runtime/runtime";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonMap: null,
      pokemonIndex: null,
      showModal: true
    }
  }

  componentDidMount() {
    var pokemonMap = {};
    var pokemonIndex = {};

    api.getKantoPokemon()
    .then((result) => {
      // console.log('result', result.data.results);
      return result.data.results;
    })
    .then((pokeUrlList) => {

      var allPokemon = pokeUrlList.map(pokemon => {
       return api.getOnePokemon(pokemon.name)

      })
      Promise.all(allPokemon)
      .then((result) => {
          // console.log('promise result', result[3].data);
          for (var i = 0; i < result.length; i++) {
            pokemonMap[JSON.stringify(result[i].data.id)] = result[i].data
            pokemonIndex[result[i].data.name] = result[i].data.id
          }
          this.setState({pokemonMap:pokemonMap, pokemonIndex:pokemonIndex});

      })


    })
    .catch((err) => {
      console.log(err);
    })
  }

render() {
  console.log('this.state.pokemonMap', this.state.pokemonMap);

  return (


    <View style={styles.app}>
      <Text>Hello React Native! 1</Text>
      <StatusBar style="auto" />
      {this.state.pokemonMap && <PokeModal
        pokemon={this.state.pokemonMap["1"]}
      />
      }
    </View>
  );
 }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

