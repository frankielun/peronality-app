import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class ResultScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Result',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Result2')}
        title="Go to next page"
      />
    );
  }
}
