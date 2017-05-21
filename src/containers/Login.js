import React from 'react'
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux';

let styles = StyleSheet.create({
	container: {
		backgroundColor: '#2684E2',
		flex: 1
	},
	header: {
		textAlign: 'center',
		marginTop: 50,
		marginBottom: 20,
		color: '#fff',
		fontSize: 16
	},
	form: {
		marginLeft: 15,
		marginRight: 15
	},
	group: {
		backgroundColor: '#fff',
		borderRadius: 4
	},
	input: {
		height: 40,
		fontSize: 14,
		marginLeft: 20
	},
	submit: {
		backgroundColor: '#8DD50E',
		padding: 10,
		borderRadius: 100,
		marginTop: 30
	},
	submitText: {
		textAlign: 'center',
		color: '#fff'
	},
	footnote: {
		textAlign: 'center',
		marginTop: 10,
		color: 'rgba(255,255,255,0.7)'
	}
});

export default class Login extends React.Component {

	login() {
		Actions.main({ type: 'replace' });
	}

	render () {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle='light-content'></StatusBar>
				<Text style={ styles.header }>Ingresa a tu cuenta</Text>

				<View style={ styles.form }>
					<View style={ styles.group }>
						<TextInput style={ styles.input } underlineColorAndroid='transparent' keyboardAppearance='dark' keyboardType='email-address' placeholder='Correo Electrónico'/>
						<TextInput style={ styles.input } underlineColorAndroid='transparent' keyboardAppearance='dark' password placeholder='Contraseña' secureTextEntry />
					</View>

					<TouchableHighlight type='submit' style={ styles.submit } onPress={ () => this.login() }>
						<Text style={ styles.submitText }>Ingresar</Text>
					</TouchableHighlight>
				</View>

				<Text className='new' style={ styles.footnote }>
					Crear una cuenta | No tienes cuenta?
				</Text>

			</View>
		)
	}
}
