import React from 'react'
import { View, Text, StatusBar, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Camera from 'react-native-camera'

export default class BarScanner extends React.Component {
  onPress = () => {
    Actions.pop()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2684e2' barStyle='light-content' />
        <View style={styles.content}>
          <Text style={styles.text}>Para escanear enfoca tu código de barras de tu ticket</Text>
          <Camera
            ref={cam => {
              this.camera = cam
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            onBarCodeRead={() => console.log('onBarCodeRead')}
          />

          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.button} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B75CF'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  text: {
    color: 'white',
    margin: 40,
    marginTop: 80,
    fontSize: 16,
    textAlign: 'center'
  },
  preview: {
    width: 320,
    height: 160,
    borderWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    height: 160,
    width: 320
  }
})
