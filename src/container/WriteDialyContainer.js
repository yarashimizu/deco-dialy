import { connect } from "react-redux";

import WriteDialy from "../components/WriteDialy";
import {
  addTodo,
  setWriteContent,
  chengeSelectedDay
} from "../redux/WriteDialy";

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    text: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  propsTest: () => {
    dispatch(addTodo("test成功"));
  },
  setDialyContent: text => {
    dispatch(setWriteContent(text));
  },
  chengeSelectedDay: day => {
    dispatch(chengeSelectedDay(day.format("YYYYMMDD")));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteDialy);
