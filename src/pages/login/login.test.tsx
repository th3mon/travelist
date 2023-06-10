import { Login } from '@/pages/login/login';
import { render, screen } from '@testing-library/react';

describe('Login Page', () => {
  it('should exist', () => {
    expect(Login).toBeDefined();
  });

  it('should display the login page', () => {
    render(<Login />);
  });

  it('should display the login page with header', () => {
    render(<Login />);

    const header: HTMLElement = screen.getByText(/Hi there!/i);

    expect(header).toBeInTheDocument();
  });

  it('should the login page node has login-page Class Name', () => {
    render(<Login />);

    const loginPage: HTMLElement = screen.getByTestId('login-page');

    expect(loginPage).toHaveClass('login-page');
  });

  it('should display the login page with login form', () => {
    render(<Login />);

    const form: HTMLElement = screen.getByTestId('login-form');

    expect(form).toBeInTheDocument();
  });

  it('should display the login page with login form which has user name and password fields', () => {
    render(<Login />);

    const loginField: HTMLElement = screen.getByLabelText(/login/i);
    const passwordField: HTMLElement = screen.getByLabelText(/password/i);

    expect(loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('should display the login page with login button', () => {
    render(<Login />);

    const loginButton: HTMLElement = screen.getByText(/Sign In/i);

    expect(loginButton).toBeInTheDocument();
  });
});
