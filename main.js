import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TabRouter from './src/router/TabRouter';
import rootReducer from './src/reducers/RootReducer';

const store = createStore(rootReducer);

const App = () =>
(
  <Provider store={store}>
    <TabRouter />
  </Provider>
);

Expo.registerRootComponent(App);
