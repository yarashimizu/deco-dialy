import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./redux";
import Router from "./router";

type Props = {};

export default class App extends Component<Props> {
  render() {
    const store = createStore(reducers, {});
    return (
      <Provider store={store}>
        <Router />
      </Provider>
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
