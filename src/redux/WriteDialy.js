import { ADD_TODO } from "./types";

const INITIAL_STATE = {
  type: "",
  testData: ""
};

//選択されたケースを元にstateの更新を行うメソッド（アクションのタイプに応じての場合分けがされている）
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //case EMPLOYEES_FETCH_SUCCESS:
    //  return action.payload;
    default:
      return state;
  }
};
