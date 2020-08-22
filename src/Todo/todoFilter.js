import React from 'react';

const TodoFilter = ({ dispatch }) => {
  console.log('hello');
  return (
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
  );
};

export default TodoFilter;
