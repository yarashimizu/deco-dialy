/**
 * 顧客情報新規追加用部分のコンポーネント
 */
import React, { Component } from "react";

import Icon, { camera } from "react-native-vector-icons/FontAwesome";
//connectのインポート宣言を行う
// → connectを用いてstoreをpropで読めるようにする
//import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
//コンポーネントの内容を定義する ※ ClassComponent
export default class MyPage extends Component {
  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {}

  //見た目データのレンダリングを行う
  render() {
    return (
      <View>
        <Text>マイページー</Text>
        <Button title="Button1" />
      </View>
    );
  }
}
