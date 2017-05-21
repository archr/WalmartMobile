import React from 'react'
import { Alert, ActivityIndicator, View, StatusBar, StyleSheet, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import UserHeader from '~components/UserHeader'
import MenuItem from '~components/MenuItem'
import ButtonRounded from '~components/ButtonRounded'
import ModalUpdateBalance from './ModalUpdateBalance'

const { width } = Dimensions.get('window')

export default class Main extends React.Component {
  constructor () {
    super()

    this.state = {
      balance: 552,
      showModal: false
    }
  }

  onPressScanTicket = () => {
    const balance = this.state.balance + 10
    const message = `Se ha actualizado tu saldo $ ${parseFloat(balance).toFixed(2)}`
    const buttons = [
      {
        text: 'OK',
        onPress: () => {
          this.setState({ balance })
        }
      }
    ]

    Actions.barScanner({
      passProps: {
        onScan: () => {
          Actions.pop()
          this.setState({ updating: true })
          setTimeout(() => {
            this.setState({ updating: false })
            Alert.alert('Nuevo saldo', message, buttons)
          }, 1000)
        }
      }
    })
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  onUpdateBalance = balance => {
    this.setState({ showModal: false, balance })
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#2684e2' barStyle='light-content' />
        <View style={styles.content}>
          {this.state.updating &&
            <View style={styles.loading}>
              <ActivityIndicator color='#FFF' />
            </View>}

          {this.state.balance > 0 &&
            <View style={styles.gif}>
              <Icon.Button name='gift' backgroundColor='#3b5998' onPress={this.showModal}>
                Donar
              </Icon.Button>
            </View>}
          <UserHeader balance={this.state.balance} />
          <View style={[styles.body, { width }]}>
            <View style={[styles.menuContainer, { width }]}>
              <MenuItem title='Mis listas' icon='list' />
              <MenuItem title='Mis pedidos' icon='shopping-cart' />
              <MenuItem title='Direcciónes' icon='location-on' />
              <MenuItem title='Historial' icon='history' />
              <MenuItem title='Ajustes' icon='settings' />
              <MenuItem title='Servicio al cliente' icon='contact-mail' />
            </View>

            <View style={styles.barScannerContainer}>
              <ButtonRounded onPress={this.onPressScanTicket}>Escanear Ticket</ButtonRounded>
            </View>
          </View>
        </View>

        {this.state.showModal &&
          <ModalUpdateBalance
            onClose={() => this.setState({ showModal: false })}
            balance={this.state.balance}
            onUpdateBalance={this.onUpdateBalance}
          />}
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
  body: {
    flex: 1,
    marginTop: 20,
    width: 300,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  barScannerContainer: {
    width,
    padding: 20
  },
  gif: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  loading: {
    position: 'absolute',
    top: 10,
    left: 10
  }
})
