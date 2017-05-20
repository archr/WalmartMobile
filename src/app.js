import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Login from './containers/Login'
import BarScanner from './containers/BarScanner'

export default class WalMartApp extends Component {
  render () {
    return (
      <Router hideNavBar>
        <Scene key='root'>
          <Scene key='login' component={Login} />
          <Scene key='barScanner' component={BarScanner} initial />
        </Scene>
      </Router>
    )
  }
}
