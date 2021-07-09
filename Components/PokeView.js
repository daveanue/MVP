import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal, Image, Button, ScrollView, Pressable} from 'react-native';
import PokeModal from './PokeModal.js';
 const PokeView = ({pokemon, pokeKey}) => {
  // console.log('what is pokemon', pokemon);
  // console.log('what is poke key', pokeKey);
  const[modalVisible, setModalVisible] = useState(false);
  const[pokeName, setpokeName] = useState(null);
  const[pokeHeight, setpokeHeight] = useState(null);
  const[pokeWeight, setpokeWeight] = useState(null);
  const[pokeAbility, setpokeAbility] = useState(null);

      return (
    <View style={styles.centeredView}>


      {pokeKey.map((key) => {
        return (
          <View key={key} style={styles.modalCard}>

          {pokeName && <PokeModal pokeHeight={pokeHeight} pokeWeight={pokeWeight} pokeAbility={pokeAbility} pokeName={pokeName} modalVisible={modalVisible} closeModal={() => {setModalVisible(prev => !prev)}} /> }
          {/* <Pressable onPress={()=> setModalVisible(true), () => setpokeHeight(pokemon[key].height), ()=> setpokeName(pokemon[key].name)}> */}

          <Pressable onPress={()=> {
            setModalVisible(true)
            setpokeHeight(pokemon[key].height * 10)
            setpokeName(pokemon[key].name)
            setpokeWeight(pokemon[key].weight / 10 * 2.2)
            setpokeAbility(pokemon[key].abilities)
          }}>
        <Image style={styles.modalImage} source={{uri: pokemon[key].sprites.versions["generation-v"]["black-white"].animated.front_default}} />
        </Pressable>
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

        </View>
      </View>
        )
      })}
    </View>
   )
 }




const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 30,
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
  modalCardwithBorder: {
    borderWidth: 4,
    borderColor: "#20232a",
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
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  centeredViews: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalViews: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTexts: {
    marginBottom: 15,
    textAlign: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});


export default PokeView;


