import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigation from './AppNavigation';
import rootReducer from './src/reducers/RootReducer';

const store = createStore(rootReducer);

const Main = () =>
(
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

Expo.registerRootComponent(Main);
