import moment from "moment";

export const ADD_TODO = "WriteDialy/ADD_TODO";
export const SET_DIALY_CONTENT = "WriteDialy/SET_DIALY_CONTENT";
export const CHENGE_SELECTED_DAY = "WriteDialy/CHENGE_SELECTED_DAY";

const INITIAL_STATE = {
  text: "最初の文字ですよ",
  popop: 0,
  selectedDay: moment().format("YYYYMMDD")
};

export const addTodo = value => ({
  type: ADD_TODO,
  text: value
});

export const setWriteContent = text => ({
  type: SET_DIALY_CONTENT,
  text: text
});

export const chengeSelectedDay = day => ({
  type: CHENGE_SELECTED_DAY,
  selectedDay: day
});

// 選択されたケースを元にstateの更新を行うメソッド（アクションのタイプに応じての場合分けがされている）
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      alert(action.text);
      return { ...state, text: action.text };
    case SET_DIALY_CONTENT:
      return { ...state, text: action.text };
    case CHENGE_SELECTED_DAY:
      return { ...state, selectedDay: action.selectedDay };
    default:
      return state;
  }
};

/* 注意点
・stateを更新する際には、展開式(...state)をあとに書いてしまうと上書きされてしまうので必ず先に書くこと。


*/
