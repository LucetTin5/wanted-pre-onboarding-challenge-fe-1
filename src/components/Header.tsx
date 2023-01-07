import { NavContainer } from "../containers/NavContainer";
import { PageHeader, PageTitle } from "./style";

export const Header = () => {
  return (
    <PageHeader>
      <PageTitle>To Do List</PageTitle>
      <NavContainer />
    </PageHeader>
  );
};
