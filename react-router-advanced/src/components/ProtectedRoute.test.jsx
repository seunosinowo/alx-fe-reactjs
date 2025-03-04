import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from '../hooks/useAuth';

test('redirects to home if not authenticated', () => {
  const { getByText } = render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/protected']}>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    </AuthProvider>
  );

  expect(getByText(/Protected Content/i)).not.toBeInTheDocument();
});

test('renders protected content if authenticated', () => {
  localStorage.setItem('isAuthenticated', 'true');

  const { getByText } = render(
    <AuthProvider>
      <MemoryRouter initialEntries={['/protected']}>
        <ProtectedRoute>
          <div>Protected Content</div>
        </ProtectedRoute>
      </MemoryRouter>
    </AuthProvider>
  );

  expect(getByText(/Protected Content/i)).toBeInTheDocument();
});
