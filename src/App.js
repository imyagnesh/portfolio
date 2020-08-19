import React, { useState, useRef, useReducer } from 'react';

const initialState = [];

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [{ id: Date.now() + Math.random(), text: payload, isDone: false }, ...state];

    case 'REMOVE_TODO':
      return state.filter((x) => x.id !== payload);

    case 'COMPLETE_TODO':
      return state.map((x) => {
        if (x.id === payload) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      });

    default:
      return state;
  }
};

const App = () => {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);
  const [status, setStatus] = useState('all');
  const todoInput = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = todoInput.current;
    dispatch({ type: 'ADD_TODO', payload: value });
    setStatus('all');
    todoInput.current.value = '';
  };

  const changeStatus = (e) => {
    setStatus(e.target.name);
  };

  const getFilteredList = () => {
    console.log('hello');
    return todoList.filter((x) => {
      switch (status) {
        case 'pending':
          return x.isDone === false;
        case 'completed':
          return x.isDone === true;
        default:
          return true;
      }
    });
  };

  return (
    <>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="todo" id="todo" ref={todoInput} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        <For each="todo" of={getFilteredList()}>
          <div>
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
        <button type="button" name="all" onClick={changeStatus}>
          ALL
        </button>
        <button type="button" name="pending" onClick={changeStatus}>
          PENDING
        </button>
        <button type="button" name="completed" onClick={changeStatus}>
          COMPLETED
        </button>
      </div>
    </>
  );
};

export default App;
