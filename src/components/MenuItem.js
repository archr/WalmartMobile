import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('window').width / 3

export default class MenuItem extends React.Component {
  render () {
    return (
      <View style={[styles.container, { width, height: width }]}>
        <Icon name={this.props.icon || 'search'} size={22} color='#1B75CF' />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    textAlign: 'center',
    marginTop: 8,
    color: '#1B75CF'
  }
})
