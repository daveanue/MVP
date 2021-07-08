import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Modal, Image, Button, ScrollView, Pressable} from 'react-native';

 const PokeView = ({pokemon, pokeKey}) => {
  console.log('what is pokemon', pokemon);
  // console.log('what is poke key', pokeKey);
  const[modalVisible, setModalVisible] = useState(false);
      return (
    <View style={styles.centeredView}>
      {pokeKey.map((key) => {
        return (
          <View style={styles.modalCard}>

          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredViews}>
          <View style={styles.modalViews}>
            <Text style={styles.modalTexts}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

          <Pressable onPress={()=> setModalVisible(true)}>
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


