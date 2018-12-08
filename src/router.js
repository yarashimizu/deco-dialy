/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import firebase from "firebase";

import MyPageContainer from "./container/MyPageContainer";
import WriteDialyContainer from "./container/WriteDialyContainer";
import LoginContainer from "./container/LoginContainer";

type Props = {};
export default class App extends Component<Props> {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCmToYfaWw6Ogo31AbbyPilpD3kvHAbeoU",
      authDomain: "letslogin-8fec8.firebaseapp.com",
      databaseURL: "https://letslogin-8fec8.firebaseio.com",
      projectId: "letslogin-8fec8",
      storageBucket: "letslogin-8fec8.appspot.com",
      messagingSenderId: "303149806946"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarPosition="overlayBottom"
        tabBarBackgroundColor="pink"
        tabBarActiveTextColor="red"
      >
        <WriteDialyContainer tabLabel="カレンダー" />
        <MyPageContainer tabLabel="マイページ" />
        <Text tabLabel="ショップ">favorite</Text>
        <Text tabLabel="設定" />
        {/*<LoginContainer
          tabLabel={this.state.loggedIn ? "ログアウト" : "ログイン"}
        />*/}
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginBottom: 20,
    marginTop: 50
  }
});
