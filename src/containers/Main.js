import React from 'react'
import { View, StatusBar, StyleSheet, Dimensions } from 'react-native'
import UserHeader from '~components/UserHeader'
import MenuItem from '~components/MenuItem'

const { width } = Dimensions.get('window')

export default class Main extends React.Component {
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
    marginTop: 50,
    width: 300,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
