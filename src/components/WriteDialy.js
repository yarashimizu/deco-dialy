/**
 * 顧客情報新規追加用部分のコンポーネント
 */
import React, { Component } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { View, TextInput, Button, Text } from "react-native";

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable={true}
        maxLength={300}
      />
    );
  }
}

//コンポーネントの内容を定義する ※ ClassComponent
export default class WriteDialy extends Component {
  //コンポーネントの内容がMountされる前に行う処理
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      text: "Useless Multiline Placeholder"
    };
  }

  //見た目データのレンダリングを行う
  render() {
    return (
      <View>
        <Button title="test1" onPress={() => this.props.propsTest()} />
        <Text>{console.log(this)}</Text>
        <Calendar monthFormat={"yyyy年 MM月 dd日"} />
        <UselessTextInput
          multiline={true}
          numberOfLines={30}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}
