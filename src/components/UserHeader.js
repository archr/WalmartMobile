import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Balance from './Balance'

export default class UserImage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.image} />
        <Text style={styles.name}>Manuel Logan</Text>
        <View style={styles.balanceContainer}>
          <Balance />
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
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 70,
    marginBottom: 10
  },
  name: {
    color: 'white',
    fontSize: 20
  },
  balanceContainer: {
    marginTop: 20
  }
})
