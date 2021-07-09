import React ,{} from 'react';
import {StyleSheet, Modal, View, Text, Pressable} from 'react-native';

const PokeModal = ({pokeName, pokeHeight, pokeWeight, pokeAbility, modalVisible, closeModal}) => {

return (


<Modal animationType="slide" visible={modalVisible} transparent={true}>
<View style={styles.centeredViews}>
<View style={styles.modalViews}>
  <Text style={styles.modalTexts}>Height - {pokeHeight + ' cm'}</Text>
  <Text style={styles.modalTexts}>Weight - {pokeWeight.toFixed(1) + ' lb'}</Text>

  <Text style={styles.modalTexts}>Abilities</Text>
  {pokeAbility.map((abilityObj, i) => {
    return (
      <Text key={i}>
      {abilityObj.ability.name}
      </Text>
    )
  })}
  <Pressable
  style={[styles.button, styles.buttonClose]}
  onPress={closeModal}
  >
  <Text style={styles.textStyle}>Close</Text>
  </Pressable>
  </View>
</View>
</Modal>
)
}

const styles = StyleSheet.create({

  centeredViews: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
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

})

export default PokeModal;