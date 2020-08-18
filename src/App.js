import React, { useState, useRef } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const todoInput = useRef(null);

  const onSubmit = () => {
    const { value } = todoInput.current;
    setTodoList([{ id: Date.now() + Math.random(), text: value, isDone: false }, ...todoList]);
    todoInput.current.value = '';
  };

  const onComplete = (id) => {
    const newTodos = todoList.map((x) => {
      if (x.id === id) {
        return { ...x, isDone: !x.isDone };
      }
      return x;
    });
    setTodoList(newTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" name="todo" id="todo" ref={todoInput} />
        <button type="button" onClick={onSubmit}>
          Add Todo
        </button>
      </div>
      <div>
        {todoList.map((todo) => (
          <div>
            <input type="checkbox" name="isDone" onChange={() => onComplete(todo.id)} />
            <p
              key={todo.id}
              style={{
                textDecoration: todo.isDone ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
