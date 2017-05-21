import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

export default class ButtonRounded extends React.Component {
  static defaultProps = {
    padding: 10
  }

  render () {
    const { padding } = this.props

    return (
      <TouchableHighlight type='submit' style={[styles.submit, { padding }]} onPress={this.props.onPress}>
        <Text style={styles.submitText}>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#8DD50E',
    borderRadius: 10
  },
  submitText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
