import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default class Balance extends React.Component {
  render () {
    return <Text style={styles.balance}>$ 552.00</Text>
  }
}

const styles = StyleSheet.create({
  balance: {
    color: '#18bd27',
    fontSize: 26
  }
})
