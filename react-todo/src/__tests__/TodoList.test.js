import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Testing', completed: false },
  { id: 3, text: 'Build a Todo App', completed: true },
];

test('renders TodoList component', () => {
  render(<TodoList initialTodos={initialTodos} />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList initialTodos={initialTodos} />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList initialTodos={initialTodos} />);
  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);

  expect(todoItem).toHaveClass('completed');
});

test('deletes a todo', () => {
  render(<TodoList initialTodos={initialTodos} />);
  const deleteButton = screen.getByText('Delete', { selector: 'button' });

  fireEvent.click(deleteButton);

  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});