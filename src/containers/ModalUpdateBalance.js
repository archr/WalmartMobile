import React from 'react'
import { Modal, View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ModalUpdateBalance extends React.Component {
  constructor ({ balance }) {
    super()

    this.state = {
      amount: parseFloat(balance).toFixed(2)
    }
  }

  updateBalance = () => {
    const amount = parseFloat(this.state.amount)
    const { balance, onUpdateBalance } = this.props

    if (!isNaN(amount) && amount <= balance) {
      onUpdateBalance(balance - amount)
    }
  }

  render () {
    const { amount } = this.state

    return (
      <Modal visible onRequestClose={this.props.onClose} transparent animationType='fade'>
        <View style={styles.modal}>
          <View style={styles.content}>
            <Text style={styles.title}>Crear donación</Text>

            <View style={styles.form}>
              <Text>Monto a donar</Text>
              <TextInput
                underlineColorAndroid='#1B75CF'
                keyboardType='numeric'
                value={amount}
                autoFocus
                onChangeText={amount => this.setState({ amount })}
              />
            </View>

            <View style={styles.buttons}>
              <Icon.Button name='gift' backgroundColor='#8DD50E' onPress={this.updateBalance}>
                Donar
              </Icon.Button>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    padding: 20,
    margin: 30,
    backgroundColor: '#FFF'
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500'
  },
  form: {
    marginTop: 20,
    marginBottom: 20
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
})
