import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class CatalogScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Catalog',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Catalog2')}
        title="Go to next page"
      />
    );
  }
}
