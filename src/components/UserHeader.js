import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Balance from './Balance'

export default class UserImage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={require('../img/profile.jpg')} style={styles.image} />
        <Text style={styles.name}>Alex Cavazos</Text>
        <View style={styles.balanceContainer}>
          <Balance balance={this.props.balance} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    marginTop: 15
  },
  name: {
    color: 'white',
    fontSize: 20
  },
  balanceContainer: {
    marginTop: 10
  }
})
