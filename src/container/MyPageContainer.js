import { connect } from "react-redux";

import MyPage from "../components/MyPage";

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPage);
