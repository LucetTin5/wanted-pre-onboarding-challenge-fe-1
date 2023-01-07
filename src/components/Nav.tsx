import { NavBar, NavButton } from "./style";
import { Link } from "react-router-dom";

interface NavProps {
  token: string | null;
  logout: () => void;
}

export const Nav = ({ token, logout }: NavProps) => {
  return (
    <NavBar>
      {token !== null ? (
        <NavButton to="#" onClick={logout}>
          로그아웃
        </NavButton>
      ) : (
        <>
          <NavButton to="/login">로그인</NavButton>
          <NavButton to="/signup">회원가입</NavButton>
        </>
      )}
    </NavBar>
  );
};
