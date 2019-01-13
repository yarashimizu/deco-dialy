/** @format */
/** 一番最初に読み込まれるファイル。
 ** AppRegistry.registerComponent(アプリケーション名,開始オブジェクト)
 **
 **/
import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
