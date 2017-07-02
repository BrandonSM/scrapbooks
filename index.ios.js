/**
 * Scrapbooks - Display different albums you like
 */


// Imports stuff
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';

// Creates the main component
const App = () => {
  return (
    <View>
      <Header />
    </View>
   )
};

// Render to the device
AppRegistry.registerComponent('scrapbooks', () => App);