import { connect } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { userLogin } from "../store/authActions";
import { AppDispatch, RootState } from "../store/store";
import { LoginReqData } from "../types/users";

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (data: LoginReqData) => dispatch(userLogin(data)),
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
