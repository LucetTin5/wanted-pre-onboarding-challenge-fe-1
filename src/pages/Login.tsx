import { Header } from "../components/Header";
import { PageWrapper } from "../components/style";
import { LoginContainer } from "../containers/LoginContainer";

export const Login = () => {
  return (
    <PageWrapper>
      <Header />
      <LoginContainer />
    </PageWrapper>
  );
};
