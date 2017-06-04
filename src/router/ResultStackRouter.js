import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ResultScreen } from '../screen';

const ResultStackRouter = StackNavigator({
  Result: {
    screen: ResultScreen,
  },
  Result2: {
    screen: ResultScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
  },
});

class ResultStackScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Result',
    };

    render() {
        return (<ResultStackRouter />);
    }
}

export default ResultStackScreen;
