import React from "react";
import Renderer from "react-test-renderer";
import TodoList from "../components/TodoList";
import { nonDeletedTodos, deletedTodos } from "./mocks";
import { unmountComponentAtNode } from "react-dom";

const mockMarkItemComplete = () => {};
const mockDeleteTodo = () => {};

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//Snapshot Tests
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
