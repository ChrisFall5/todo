import React, { useState, useEffect } from 'react';
import {
  Checkbox,
  Form,
  Header,
  List,
  Loader,
  Icon
} from 'semantic-ui-react';
import { useQuery, useMutation } from 'react-apollo';

import GET_TODOS from '../graphql/queries/getTodos';
import CREATE_TODO from '../graphql/mutations/createTodo';
import MARK_COMPLETE from '../graphql/mutations/markComplete';
import DELETE_TODO from '../graphql/mutations/deleteTodo';


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todoInput, setTodoInput] = useState('');

  const { data: todoList } = useQuery(GET_TODOS);
  
  useEffect(() => {
    if (todoList?.todos) {
      setTodos(todoList.todos);
      setLoading(false);
    }
  }, [todoList]);
  
  const [markItemComplete] = useMutation(MARK_COMPLETE, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  const onInputChange = (e, { value }) => {
    setTodoInput(value);
  }

  const onSubmit = () => {
    createTodo({ variables: { text: todoInput } });
    setTodoInput('');
  }

  return (
    <div className="todo-list">
      <Header dividing size="large">To-Do List</Header>
      <List>
        {loading &&
          <Loader active />
        }
        {todos && todos.length > 0 && todos.map((todo) => {
          if (!todo.isDeleted) {
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
          }
        })}
      </List>
      <Form onSubmit={onSubmit} className="todo-input" >
        <Form.Input
          type = "text"
          value = {todoInput}
          onChange = {onInputChange}
          placeholder = "Enter a new to-do item`"
        />
        <Form.Button type="submit">Add To-Do</Form.Button>
      </Form>
    </div>
  );
};

export default Todo;
``