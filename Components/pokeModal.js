import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Modal, Image, Button} from 'react-native';

 const PokeModal = ({pokemon}) => {
  console.log('what is pokemon', pokemon);
      return (
    <Modal style={styles.centeredView}>
      <View style={styles.modalCard}>
        <Image style={styles.modalImage} source={{uri: pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}} />
        <View style={styles.modalInfo}>
          <View style={styles.modalTypes}>
            <Text style={styles.infoTitle}>
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            </Text>
            {pokemon.types.map((typeObj, i2) => {
              return (
                <Text key={i2} style={styles.modalType}>
                  {
                  i2 === pokemon.types.length - 1
                   ? typeObj.type.name
                   : typeObj.type.name + '/'
                  }
                </Text>
              );
            })}
            </View>
              {pokemon.abilities.map((abilityObj, i) => {
                return (
                  <Text style={styles.abilityLine} key={i}>
                    {abilityObj.ability.name}
                  </Text>
                );
              })}
        </View>
      </View>
    </Modal>
   )
 }




const styles = StyleSheet.create({
  modalCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    flex: 3,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  modalInfo: {
    flex: 3,
  },
  infoTitle: {
    paddingTop: 10,
    fontSize: 22,
    color: 'red',
  },
  modalClose: {
    flex: 1,
  },
});


export default PokeModal;


