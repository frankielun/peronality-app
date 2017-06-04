import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bgColor = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () =>
(
  <View style={styles.container}>
    <Text>Open up main.js to start working on your app!</Text>
  </View>
);

Expo.registerRootComponent(App);
