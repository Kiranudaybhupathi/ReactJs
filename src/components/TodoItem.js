import React from 'react';

function TodoItem({ todo, index, toggleComplete }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : '',
        cursor: 'pointer',
      }}
      onClick={() => toggleComplete(index)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
