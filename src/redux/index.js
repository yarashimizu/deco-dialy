import { combineReducers } from "redux";

//各々の要素に関するReducerのインポート宣言
import WriteDailyReducer from "./WriteDialy";

export default combineReducers({
  WriteDaily: WriteDailyReducer
});
