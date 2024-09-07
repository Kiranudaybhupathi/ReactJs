import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <input
        type="text"
        onKeyPress={(event) => {
          if (event.key === 'Enter' && event.target.value) {
            addTodo(event.target.value);
            event.target.value = '';
          }
        }}
        placeholder="Add a new task"
      />
    </div>
  );
}

export default App;
