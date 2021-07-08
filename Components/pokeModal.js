import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Modal, Image, Button, ScrollView} from 'react-native';

 const PokeModal = ({pokemon, pokeKey}) => {
  // console.log('what is pokemon', pokemon);
  // console.log('what is poke key', pokeKey);
      return (

    <View style={styles.centeredView}>
      {pokeKey.map((key) => {
        return (
          <View style={styles.modalCard}>
        <Image style={styles.modalImage} source={{uri: pokemon[key].sprites.versions["generation-v"]["black-white"].animated.front_default}} />
        <View style={styles.modalInfo}>
          <View style={styles.modalTypes}>
            <Text style={styles.infoTitle}>
              {pokemon[key].name[0].toUpperCase() + pokemon[key].name.slice(1)}
            </Text>
            {pokemon[key].types.map((typeObj, i2) => {
              return (
                <Text key={i2} style={styles.modalType}>
                  {
                  i2 === pokemon[key].types.length - 1
                   ? typeObj.type.name
                   : typeObj.type.name + '/'
                  }
                </Text>
              );
            })}
            </View>
              {pokemon[key].abilities.map((abilityObj, i) => {
                return (
                  <Text style={styles.abilityLine} key={i}>
                    {abilityObj.ability.name}
                  </Text>
                );
              })}
        </View>
      </View>
        )
      })}

    </View>
   )
 }




const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  modalCard: {
    flexBasis: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  modalInfo: {
  },
  infoTitle: {
    paddingTop: 10,
    fontSize: 22,
    color: 'red',
  },
  modalClose: {
  },
});


export default PokeModal;


