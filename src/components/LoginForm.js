import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator
} from "react-native";
import firebase from "firebase";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: true,
      error: ""
    });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: "Authentication Failed"
    });
  }

  loadSpinner() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    }

    return (
      <TouchableOpacity
        onPress={this.onButtonPress.bind(this)}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>ログイン</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View>
        <View style={styles.wrap}>
          <TextInput
            placeholder="user@gmail.com"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.wrap}>
          <TextInput
            secureTextEntry
            placeholder="password"
            autoCorrect={false}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.wrap}>{this.loadSpinner()}</View>
        <Text>{this.state.error}</Text>
      </View>
    );
  }
}

const styles = {
  wrap: {
    padding: 10
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    borderWidth: 1,
    borderColor: "#333"
  }
};

export default LoginForm;
