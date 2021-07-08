import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import api from './api/api.js'
import PokeModal from './Components/PokeModal.js';
import "regenerator-runtime/runtime";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonMap: null,
      pokemonIndex: null,
      showModal: true,
      pokeKey: null
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
          // console.log('keys', Object.keys(pokemonMap))
          const pokeKey = Object.keys(pokemonMap);
          this.setState({pokemonMap:pokemonMap, pokemonIndex:pokemonIndex, pokeKey:pokeKey});
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

render() {
  console.log('this.state.pokemonMap', this.state.pokemonMap);
  return (
 <ScrollView style={{backgroundColor: 'red', marginHorizontal: 20}}>
  <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
    <View style={styles.app}>
      {this.state.pokemonMap && <PokeModal
        pokemon={this.state.pokemonMap}
        pokeKey={this.state.pokeKey}
      />
      }
    </View>
  </View>
  </ScrollView>
  );
 }
}

const styles = StyleSheet.create({
  app: {
    width: '100%',
    backgroundColor: 'white'
  }
});

