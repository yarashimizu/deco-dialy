import { connect } from "react-redux";

import WriteDialy from "../components/WriteDialy";

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteDialy);
