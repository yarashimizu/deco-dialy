import { connect } from "react-redux";

import WriteDialy from "../components/WriteDialy";
import { addTodo } from "../redux/WriteDialy";

const mapStateToProps = (state, ownProps) => {
  return {
    state,
    text: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  propsTest: () => {
    dispatch(addTodo("test成功"));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteDialy);
