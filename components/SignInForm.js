'use strict';

import axios from 'axios';
import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-one-time-password-c33a8.cloudfunctions.net';

class SignInForm extends Component {
	state = { code: '', phone: '' };

	handleSubmit = async () => {
		try {
			let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { 
				code: this.state.code, 
				phone: this.state.phone,
			});
			firebase.auth().signInWithCustomToken(data.token);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<View>
				<View>
					<FormLabel>Enter Phone number</FormLabel>
					<FormInput 
						value={this.state.phone}
						onChangeText={phone => this.setState({ phone })}
					/>
				</View>
				<View style={{ marginBottom: 10 }}>
					<FormLabel>Enter passcode</FormLabel>
					<FormInput 
						value={this.state.code}
						onChangeText={code => this.setState({ code })}
					/>
				</View>
				<Button 
					title="Submit"
					onPress={this.handleSubmit}
				/>
			</View>
		);
	}
}

module.exports = {
	SignInForm
};
