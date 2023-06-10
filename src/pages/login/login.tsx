import React from 'react';

export const Login: React.FunctionComponent = function () {
  return (
    <div className="login-page" data-testid="login-page">
      <header>
        <h1>Hi there!</h1>
      </header>

      <form data-testid="login-form">
        <div data-testid="login-field">
          <label htmlFor="login">login</label>
          <input type="text" name="login" id="login" />
        </div>

        <div data-testid="password-field">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" data-testid="login-button">
          Sign in
        </button>
      </form>
    </div>
  );
};
