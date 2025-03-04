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
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /Add Todo/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /Add Todo/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const todoItem = screen.getByText(/New Todo/i);
  fireEvent.click(todoItem);

  expect(todoItem).toHaveClass('completed');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /Add Todo/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  const deleteButton = screen.getByRole('button', { name: /Delete/i });
  fireEvent.click(deleteButton);

  expect(screen.queryByText(/New Todo/i)).not.toBeInTheDocument();
});