import { connect } from "react-redux";

import LoginForm from "../components/LoginForm";

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
