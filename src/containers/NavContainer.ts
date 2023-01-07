import { connect } from "react-redux";
import { Nav } from "../components/Nav";
import { userLogout } from "../store/authActions";
import { AppDispatch, RootState } from "../store/store";

const mapStateToProps = (state: RootState) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  logout: () => dispatch(userLogout()),
});

export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
