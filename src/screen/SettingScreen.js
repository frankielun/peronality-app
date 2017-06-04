import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class SettingScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Setting',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Setting2')}
        title="Go to next page"
      />
    );
  }
}
