import { Login } from '@/pages/login/login';
import { render } from '@testing-library/react';

describe('Login Page', () => {
  it('should exist', () => {
    expect(Login).toBeDefined();
  });

  it('should display the login page', () => {
    render(<Login />);
  });
});
