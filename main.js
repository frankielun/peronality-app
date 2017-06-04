import Expo from 'expo';
import React from 'react';
import TabRouter from './src/router/TabRouter';

const App = () =>
(
  <TabRouter />
);

Expo.registerRootComponent(App);
