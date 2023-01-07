import React from "react";
import { useToken } from "../hooks/useToken";
import { useNavigate } from "react-router-dom";

interface WrappedProps {}

export const withLogin =
  <P extends WrappedProps>(Component: React.ComponentType<P>) =>
  (props: P) => {
    const token = useToken();
    const navigate = useNavigate();
    if (token) {
      return <Component {...props} />;
    } else {
      // navigate("/login");
      return <div>로그인이 필요합니다</div>;
    }
  };
