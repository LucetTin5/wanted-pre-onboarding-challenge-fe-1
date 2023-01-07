import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

// Header
export const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const PageHeader = styled.header`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const NavBar = styled.nav`
  display: flex;
  padding: 2rem 0;
  width: 50%;
  justify-content: center;
`;

export const NavButton = styled(Link)`
  text-decoration: none;
  padding: 0 2rem;
`;

// todo list
export const TodoListWrapper = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
`;

export const TodoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border: 1px solid #ccc;
  margin-bottom: 0.2rem;
`;

export const TodoListItem = styled.li`
  width: 100%;
  font-weight: bold;
  text-align: center;
`;

export const TodoListItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
`;

export const TodoTitle = styled.h3`
  font-weight: bold;
  flex: 1;
`;

export const TodoContent = styled.p`
  flex: 3;
`;

const TodoButton = styled.button`
  border: none;
  padding: 0.2rem 0.5rem;
  font-size: 0.5rem;
  cursor: pointer;
  border-radius: 0.2rem;
`;

export const TodoUpdateButton = styled(TodoButton)`
  background-color: #ddd;
  margin-right: 0.4rem;
  &:hover {
    background-color: #aaa;
  }
`;

export const TodoDeleteButton = styled(TodoButton)`
  background-color: #f00;
  color: #fff;
  &:hover {
    background-color: #c00;
  }
`;

// create todo
export const CreateTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
`;

export const CreateTodoOpenButton = styled.button`
  font-weight: bold;
  text-align: center;
  padding: 0.4rem;
  &.active {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const CreateTodoInput = styled.input`
  margin: 0.4rem 0;
  padding: 0.4rem;
  width: 50%;
`;

export const CreateTodoContent = styled.textarea`
  outline: none;
  padding: 0.4rem;
  margin: 0.4rem 0;
  width: 50%;
`;

export const CreateTodoButton = styled.button`
  padding: 0.4rem;
  width: 30%;
`;
