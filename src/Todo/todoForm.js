import React from 'react';

const TodoForm = ({ value, onSubmit, dispatch }) => {
  console.log('hello');
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        value={value}
        onChange={(e) => dispatch({ type: 'CHANGE_TEXT', payload: e.target.value })}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
