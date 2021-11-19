import React from "react";
import Renderer from "react-test-renderer";
import TodoList from "../components/TodoList";
import { nonDeletedTodos, deletedTodos } from "./mocks";

const mockMarkItemComplete = () => {};
const mockDeleteTodo = () => {};

it('renders non-deleted todo list correctly', () => {
  const tree = Renderer.create(<TodoList
    todos={nonDeletedTodos}
    markItemComplete={mockMarkItemComplete}
    deleteTodo={mockDeleteTodo}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders deleted todo list correctly', () => {
  const tree = Renderer.create(<TodoList todos={deletedTodos} />).toJSON();

  expect(tree).toMatchSnapshot();
});
