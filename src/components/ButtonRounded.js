import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export default class ButtonRounded extends React.Component {
  render () {
    return (
      <TouchableHighlight type='submit' style={styles.submit} onPress={this.props.onPress}>
        <Text style={styles.submitText}>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#8DD50E',
    padding: 10,
    borderRadius: 10
  },
  submitText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
