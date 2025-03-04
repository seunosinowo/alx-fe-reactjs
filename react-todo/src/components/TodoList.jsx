import React, { useState } from "react";

const todos = [
  {
    id: 1,
    title: "Buy milk",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: true,
  },
  {
    id: 3,
    title: "Do laundry",
    completed: false,
  },
];

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
            {todo.title}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;