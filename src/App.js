import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoForm from './Todo/todoForm';
import TodList from './Todo/todList';
import TodoFilter from './Todo/todoFilter';

const App = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO' });
  };

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
