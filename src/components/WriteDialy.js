/**
 * 顧客情報新規追加用部分のコンポーネント
 */
import React, { Component } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//コンポーネントの内容を定義する ※ ClassComponent
export default class WriteDialy extends Component {
  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {}

  //見た目データのレンダリングを行う
  render() {
    return (
      <View>
        <Calendar monthFormat={"yyyy年 MM月 dd日"} />
        <Text>ここに日記を書いていくよ</Text>
      </View>
    );
  }
}
