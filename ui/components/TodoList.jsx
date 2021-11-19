import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  List,
  Icon
} from 'semantic-ui-react';

const TodoList = ({ todos, markItemComplete, deleteTodo }) => (
  <List>
    {todos.map((todo) => {
      if (todo.isDeleted) {
        return (
          <List.Item key={todo.id}>
            <Checkbox
              disabled
              className = "todo-text"
              label = {todo.text}
              checked = {todo.isComplete}
            />
          </List.Item>
        );
      }
      return (
        <List.Item key={todo.id}>
          <Checkbox
            className = "todo-text"
            label = {todo.text}
            checked = {todo.isComplete}
            onClick = {() => markItemComplete({ variables: { id: todo.id, complete: !todo.isComplete } })}
          />
          <Icon
            name="delete"
            link
            className="deleteButton"
            onClick={() => deleteTodo ({ variables: { id: todo.id } })}
          />
        </List.Item>
      );
    })}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  markItemComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
};

TodoList.defaultProps = {
  markItemComplete: () => {},
  deleteTodo: () => {},
};

export default TodoList;
