import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./configureStore";

import reducers from "./redux";
import Router from "./router";

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
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
