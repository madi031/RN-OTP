'use strict';

import axios from 'axios';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormInput, FormLabel } from 'react-native-elements';

const ROOT_URL = 'https://us-central1-one-time-password-c33a8.cloudfunctions.net';

class SignUpForm extends Component {
	state = { phone: '' };

	handleSubmit = async () => {
		try {
			await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
			await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<View>
				<View style={{ marginBottom: 10 }}>
					<FormLabel>Enter Phone Number</FormLabel>
					<FormInput 
						value={this.state.phone}
						onChangeText={phone => this.setState({ phone })}
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
	SignUpForm,
};
