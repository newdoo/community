/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import styles from './App.scss';

import UIToolbar from './components/UIToolbar';
import UIWebView from './components/UIWebView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        {/* <UIToolbar style={styles.toolbar}/> */}
        <UIWebView />
        { /* 
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native! Hi doodoo123</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        */ }
      </View>
    );
  }
}