/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';                  //上部のルーティング設定
import TabNavigator from 'react-native-tab-navigator';
import ToDoList from './components/ToDoList'
import {camera} from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom">
        <ToDoList tabLabel='Tab #1' style={styles.container} />
        <Text tabLabel='Tab #2'>favorite</Text>
        <Text tabLabel='Tab #3'>{camera}</Text>

      </ScrollableTabView>

    );
  }
}
      //<View style={styles.container}>
      //  <Text style={styles.welcome}></Text>
      //  <Text style={styles.instructions}>T</Text>
      //  <Text style={styles.instructions}>{instructions}</Text>
      //</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
