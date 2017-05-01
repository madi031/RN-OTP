import Expo from 'expo';
import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignUpForm, SignInForm } from './components/index';

class App extends React.Component {
  componentDidMount() {
    const config = {
        apiKey: "AIzaSyBhLRt3uBdfhAdi77UYm9xh0O3GL72g3Wk",
        authDomain: "one-time-password-c33a8.firebaseapp.com",
        databaseURL: "https://one-time-password-c33a8.firebaseio.com",
        projectId: "one-time-password-c33a8",
        storageBucket: "one-time-password-c33a8.appspot.com",
        messagingSenderId: "559856465618"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SignUpForm />
        </View>
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
