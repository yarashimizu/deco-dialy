export const ADD_TODO = "WriteDialy/ADD_TODO";

const INITIAL_STATE = {
  testData: ""
};

export const addTodo = value => ({
  type: ADD_TODO,
  text: value,
  testData: ""
});

//選択されたケースを元にstateの更新を行うメソッド（アクションのタイプに応じての場合分けがされている）
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      alert(action.text);
      return { ...state, testData: action.text };
    default:
      return state;
  }
};
