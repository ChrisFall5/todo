import React, { useState, useEffect } from 'react';
import {
  Form,
  Header,
  Loader,
  Divider,
  Message,
  Accordion,
  Icon
} from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/client';

import GET_TODOS from '../graphql/queries/getTodos';
import GET_DELETED_TODOS from '../graphql/queries/getDeletedTodos';
import CREATE_TODO from '../graphql/mutations/createTodo';
import MARK_COMPLETE from '../graphql/mutations/markComplete';
import DELETE_TODO from '../graphql/mutations/deleteTodo';
import TodoList from './TodoList';
import { validateLength } from '../helpers/validationHelper';
import { separateTodos } from '../helpers/genericHelpers';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [deletedTodos, setdeletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todoInput, setTodoInput] = useState('');
  const [error, setError] = useState('');
  const [showDeleted, setShowDeleted] = useState(false);

  const { data: todoList } = useQuery(GET_TODOS);
  const { data: deleted } = useQuery(GET_DELETED_TODOS);
  
  useEffect(() => {
    if (todoList?.getTodos && deleted?.getDeletedTodos) {
      const { completed, incomplete } = separateTodos(todoList.getTodos);

      setTodos(incomplete);
      setCompletedTodos(completed);
      setdeletedTodos(deleted.getDeletedTodos);
      setLoading(false);
    }
  }, [todoList, deleted]);
  
  const [markItemComplete] = useMutation(MARK_COMPLETE, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{query: GET_TODOS}, { query: GET_DELETED_TODOS }]
  });

  const onInputChange = (e, { value }) => {
    setTodoInput(value);
    setError('');
  }

  const onSubmit = () => {
    const { valid, message } = validateLength(todoInput);
    if (!valid) setError(message);
    else {
      createTodo({ variables: { text: todoInput } });
      setTodoInput('');
      setError('');
    }
  }

  if (loading) {
    return <Loader active />;
  }

  return (
    <div className="todo-app">
      <Header dividing size="large">To-Do List</Header>
      {completedTodos && completedTodos.length > 0 &&
        <TodoList todos={completedTodos} markItemComplete={markItemComplete} deleteTodo={deleteTodo} />
      }
      {todos && todos.length > 0 &&
        <>
          <Divider />
          <TodoList todos={todos} markItemComplete={markItemComplete} deleteTodo={deleteTodo} />
        </>
      }
      <Form onSubmit={onSubmit} className="todo-input" >
        <Form.Input
          type = "text"
          value = {todoInput}
          onChange = {onInputChange}
          placeholder = "Enter a new to-do item"
        />
        <Form.Button type="submit">Add To-Do</Form.Button>
      </Form>
      {error.length > 0 && 
        <Message negative>{error}</Message>
      }
      {deletedTodos && deletedTodos.length > 0 &&
        <Accordion>
          <Accordion.Title active={showDeleted} onClick={() => setShowDeleted(!showDeleted)}>
            <Icon name='dropdown'/>
            {showDeleted ? 'Hide' : 'Show'} Deleted Todos
          </Accordion.Title>
          <Accordion.Content active={showDeleted}>
            <TodoList todos={deletedTodos} />
          </Accordion.Content>
        </Accordion>
      }
    </div>
  );
};

export default Todo;
