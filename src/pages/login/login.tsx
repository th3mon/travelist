import React from 'react';
import { Button, Form, useFormStore } from '@ariakit/react';

export const Login: React.FunctionComponent = function () {
  const form = useFormStore({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="login-page w-1/2" data-testid="login-page">
      <Form store={form} aria-labelledby="sign-in-into-the-app" data-testid="login-form">
        <header>
          <h1 id="sign-in-into-the-app">Hi there!</h1>
        </header>

        <div className="flex flex-col text-xl" data-testid="login-field">
          <label className="text-input-label" htmlFor="login">
            login
          </label>
          <input
            className="bg-input-bg text-input-text p-4 rounded"
            type="text"
            name="login"
            id="login"
          />
        </div>

        <div className="flex flex-col text-xl" data-testid="password-field">
          <label className="text-input-label" htmlFor="password">
            password
          </label>
          <input
            className="bg-input-bg text-input-text p-4 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <Button
          className="login-button bg-primary w-full text-xl py-4 text-center rounded hover:bg-primary-lighter text-light"
          type="submit"
          data-testid="login-button"
        >
          Sign in
        </Button>
      </Form>
    </div>
  );
};
