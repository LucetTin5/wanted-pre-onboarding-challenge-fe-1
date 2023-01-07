import { connect } from "react-redux";
import { SignupForm } from "../components/SignupForm";
import { userSignup } from "../store/authActions";
import { AppDispatch, RootState } from "../store/store";
import { SignupReqData } from "../types/users";

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signup: (data: SignupReqData) => dispatch(userSignup(data)),
});

export const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
