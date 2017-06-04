import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { SettingScreen } from '../screen';

const SettingStackRouter = StackNavigator({
  Setting: {
    screen: SettingScreen,
  },
  Setting2: {
    screen: SettingScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#000000',
  },
});

class SettingStackScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Setting',
    };

    render() {
        return (<SettingStackRouter />);
    }
}

export default SettingStackScreen;
