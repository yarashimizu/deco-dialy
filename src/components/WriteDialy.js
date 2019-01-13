/**
 * 顧客情報新規追加用部分のコンポーネント
 */
import React, { Component } from "react";
import moment from "moment";
//import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import CalendarPicker from "react-native-calendar-picker";
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
      selectDay: moment().format("YYYY-MM-DD")
    };
  }

  //見た目データのレンダリングを行う
  render() {
    let selectDay = this.state.selectDay;
    return (
      <View>
        <Button title="保存" onPress={() => this.props.propsTest()} />
        <Text>{console.log(selectDay)}</Text>
        {/*<Calendar monthFormat={"yyyy年 MM月 dd日"} />*/}
        <CalendarPicker
          startFromMonday={true}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={day => this.props.chengeSelectedDay(day)}
        />
        {console.log(this)}
        <UselessTextInput
          multiline={true}
          numberOfLines={30}
          onChangeText={text => this.props.setDialyContent(text)}
          value={this.props.state.writeDaily.text}
        />
      </View>
    );
  }
}
