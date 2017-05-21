import React from 'react'
import { View, StatusBar, StyleSheet, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import UserHeader from '~components/UserHeader'
import MenuItem from '~components/MenuItem'
import ButtonRounded from '~components/ButtonRounded'

const { width } = Dimensions.get('window')

export default class Main extends React.Component {
  onPressScanTicket () {
    Actions.barScanner()
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2684e2' barStyle='light-content' />
        <View style={styles.content}>
          <UserHeader />
          <View style={[styles.menuContainer, { width }]}>
            <MenuItem title='Mis listas' icon='list' />
            <MenuItem title='Mis pedidos' icon='shopping-cart' />
            <MenuItem title='Direcciónes' icon='location-on' />
            <MenuItem title='Historial' icon='history' />
            <MenuItem title='Ajustes' icon='settings' />
            <MenuItem title='Servicio al cliente' icon='contact-mail' />

            <View style={styles.barScannerContainer}>
              <ButtonRounded onPress={this.onPressScanTicket}>Escanear Ticket</ButtonRounded>
            </View>
          </View>
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
    paddingTop: 30,
    flex: 1
  },
  text: {
    color: 'white',
    margin: 40,
    marginTop: 80,
    fontSize: 16,
    textAlign: 'center'
  },
  menuContainer: {
    flex: 1,
    marginTop: 20,
    width: 300,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  barScannerContainer: {
    width,
    paddingLeft: 20,
    paddingRight: 20,
    height: 60,
    position: 'absolute',
    bottom: 0
  }
})
