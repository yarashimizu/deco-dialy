import { connect } from "react-redux";
import Shop from "../components/Shop";

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
