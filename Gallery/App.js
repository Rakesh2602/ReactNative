import { View, Text, Button,TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
const App = () => {

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  return (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.header}>Upload Photo</Text>
      <TouchableOpacity style={styles.button1}
          onPress={takePhotoFromCamera}>
        <Text style={styles.text1}>Take photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}
      onPress={choosePhotoFromLibrary}>
        <Text style={styles.text2}>Choose from Library</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    // borderWidth:2,
    backgroundColor: 'skyblue',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  button1: {
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 4,
    marginTop: 50
  },
  text1: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'white'
  },
  button2: {
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'red',
    borderRadius: 8,
    borderWidth: 4,
    marginTop: 20
  },
  text2: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'white'
  },
})
export default App