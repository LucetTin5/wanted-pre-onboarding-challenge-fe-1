import { AppWrapper } from "./components/style";
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router />
      </AppWrapper>
    </>
  );
}

export default App;
