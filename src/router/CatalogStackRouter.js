import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { CatalogScreen } from '../screen';

const CatalogStackRouter = StackNavigator({
  Catalog: {
    screen: CatalogScreen,
  },
  Catalog2: {
    screen: CatalogScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
  },
});

class CatalogStackScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Catalog',
    };

    render() {
        return (<CatalogStackRouter />);
    }
}

export default CatalogStackScreen;
