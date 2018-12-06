/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
●●●●●●残タスク●●●●●●●
・画面下のスクロールバーをアイコンに変更する。
→Propsの設定をしっかりと行ったあとでないと出いないと思われる。

●●●●●●●●●●●●●●●●●●●●
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import ToDoList from "./components/ToDoList";
import WriteDialyContainer from "./container/WriteDialyContainer";
import Icon, { camera } from "react-native-vector-icons/FontAwesome";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarPosition="overlayBottom"
        tabBarBackgroundColor="pink"
        tabBarActiveTextColor="red"
      >
        <WriteDialyContainer tabLabel="テスト" />
        <ToDoList tabLabel="aaa" style={styles.container} />
        <Text tabLabel="Tab #2">favorite</Text>
        <Text tabLabel="Tab #3" />
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
