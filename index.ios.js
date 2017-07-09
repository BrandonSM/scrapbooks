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
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Creates the main component -- must be wrapped in <View></View> if returning more than 1 component.
const App = () => {
  return (
    <View style={styles.container}>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
   )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Render to the device
AppRegistry.registerComponent('scrapbooks', () => App);