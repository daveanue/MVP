import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './api/api.js'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonMap: {},
      pokemonIndex: {}
    }
  }

  componentDidMount() {
    let pokemonMap = {};
    let pokemonIndex = {};

    api.getKantoPokemon(result => {
      // console.log('result', result);
      result.forEach(pokemon => {
        // for each pokemon we pass the name into getOnePokemon
        api.getOnePokemon(pokemon.name, pokemonData => {
          if (pokemonData === 'error') {
            console.log('no pokemon Data');
            return;
          }
          pokemonMap[pokemonData.id] = pokemonData;
          pokemonIndex[pokemonData.name.toLowerCase()] = pokemonData.id;
        })
      })
    })
    this.setState({pokemonMap: pokemonMap, pokemonIndex: pokemonIndex});

  }
render() {
  console.log('pokemonmap State', this.state.pokemonMap);
  console.log('pokemonIndex State', this.state.pokemonIndex);
  return (
    <View style={styles.container}>
      <Text>Hello React Native! 1</Text>
      <StatusBar style="auto" />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

