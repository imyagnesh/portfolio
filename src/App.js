import React, { useReducer, useEffect } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoForm from './Todo/todoForm';
import TodList from './Todo/todList';
import TodoFilter from './Todo/todoFilter';

const App = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  const loadData = async () => {
    dispatch({ type: 'LOADING', payload: true });
    try {
      const res = await fetch('http://localhost:3004/todo');
      const todos = await res.json();
      dispatch({ type: 'LOAD_TODO', payload: todos });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error });
    } finally {
      dispatch({ type: 'LOADING', payload: false });
    }
  };

  const addTodo = async () => {
    dispatch({ type: 'LOADING', payload: true });
    try {
      const res = await fetch('http://localhost:3004/todo', {
        method: 'POST',
        body: JSON.stringify({ text: todo.todoText, isDone: false }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newTodo = await res.json();
      dispatch({ type: 'ADD_TODO', payload: newTodo });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error });
    } finally {
      dispatch({ type: 'LOADING', payload: false });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  useEffect(() => {
    loadData();
  }, []);

  if (todo.loading) {
    return <h1>Loading...</h1>;
  }

  if (todo.error) {
    return <h1>Oops! something went wrong</h1>;
  }

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm value={todo.todoText} onSubmit={onSubmit} dispatch={dispatch} />
      <TodList todoList={todo.filteredData} dispatch={dispatch} />
      <TodoFilter dispatch={dispatch} />
    </>
  );
};

export default App;
