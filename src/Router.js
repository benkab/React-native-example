import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial />
    </Scene>
  </Router>
);

export default RouterComponent;
