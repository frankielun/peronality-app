import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import TabRouter from './src/router/TabRouter';

const AppNavigator = StackNavigator({
  Main: {
    screen: TabRouter,
    navigationOptions: {
      title: 'Main',
    },
  },
});

const AppNavigation = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

AppNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default connect(
  state => ({ nav: state.nav })
)(AppNavigation);
