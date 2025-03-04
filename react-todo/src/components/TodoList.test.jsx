import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

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
