import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';

const App = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO' });
  };

  return (
    <>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="todo"
            value={todo.todoText}
            onChange={(e) => dispatch({ type: 'CHANGE_TEXT', payload: e.target.value })}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        <For each="todo" of={todo.filteredData}>
          <div key={todo.id}>
            <input
              type="checkbox"
              name="isDone"
              checked={todo.isDone}
              onChange={() => dispatch({ type: 'COMPLETE_TODO', payload: todo.id })}
            />
            <p
              key={todo.id}
              style={{
                textDecoration: todo.isDone ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </p>
            <button
              type="button"
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
            >
              Delete
            </button>
          </div>
        </For>
      </div>
      <div>
        <button
          type="button"
          name="all"
          onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'all' })}
        >
          ALL
        </button>
        <button
          type="button"
          name="pending"
          onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'pending' })}
        >
          PENDING
        </button>
        <button
          type="button"
          name="completed"
          onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'completed' })}
        >
          COMPLETED
        </button>
      </div>
    </>
  );
};

export default App;
