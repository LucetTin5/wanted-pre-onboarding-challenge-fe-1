import { Header } from "../components/Header";
import { PageWrapper } from "../components/style";
import { SignupContainer } from "../containers/SignupContainer";

export const Signup = () => {
  return (
    <PageWrapper>
      <Header />
      <SignupContainer />
    </PageWrapper>
  );
};
