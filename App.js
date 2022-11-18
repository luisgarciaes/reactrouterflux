import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import HomeView from './src/HomeView';

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home' component={HomeView} hideNavBar />
  </Scene>
);

export default class App extends Component {
  render() {
    return (
      <Router scenes={scenes} />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
