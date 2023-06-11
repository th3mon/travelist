import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from '@/pages/login/login';

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

  it('should display the login page with login form which has login and password fields', () => {
    render(<Login />);

    const loginField: HTMLElement = screen.getByLabelText(/login/i);
    const passwordField: HTMLElement = screen.getByLabelText(/password/i);

    expect(loginField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('should display the login page with form where input login field has a placeholder', () => {
    render(<Login />);

    const loginField: HTMLElement = screen.getByLabelText(/login/i);

    expect(loginField).toHaveAttribute('placeholder', 'John.Doe@email.com');
  });

  it('should display the login page with form where input password and login fields should be required', () => {
    render(<Login />);

    const loginField: HTMLElement = screen.getByLabelText(/login/i);
    const passwordField: HTMLElement = screen.getByLabelText(/password/i);

    expect(loginField).toHaveAttribute('required');
    expect(passwordField).toHaveAttribute('required');
  });

  it('should display the validation when required fields are empty', async () => {
    render(<Login />);

    const loginButton: HTMLElement = screen.getByText(/Sign In/i);
    const loginErrorMessage: HTMLElement = screen.getByTestId('login-form__error-message-login');
    const passwordErrorMessage: HTMLElement = screen.getByTestId(
      'login-form__error-message-password'
    );

    await userEvent.click(loginButton);

    expect(loginErrorMessage).toBeInTheDocument();
    expect(passwordErrorMessage).toBeInTheDocument();

    expect(loginErrorMessage).toHaveTextContent('Login field is required');
    expect(passwordErrorMessage).toHaveTextContent('Password field is required');
  });

  it('should display the login page with login button', () => {
    render(<Login />);

    const loginButton: HTMLElement = screen.getByText(/Sign In/i);

    expect(loginButton).toBeInTheDocument();
  });
});
