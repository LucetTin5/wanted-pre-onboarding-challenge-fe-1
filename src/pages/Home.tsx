import { Header } from "../components/Header";
import { PageWrapper } from "../components/style";
import { CreateTodoContainer } from "../containers/CreateTodoContainer";
import { TodoListContainer } from "../containers/TodoListContainer";

export const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <TodoListContainer />
      <CreateTodoContainer />
    </PageWrapper>
  );
};
