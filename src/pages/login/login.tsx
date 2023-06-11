import React from 'react';
import {
  Button,
  Form,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
  Heading,
  HeadingLevel,
  useFormStore,
} from '@ariakit/react';

export const Login: React.FunctionComponent = function () {
  const form = useFormStore({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="login-page w-1/2" data-testid="login-page">
      <Form
        className="login-form"
        store={form}
        aria-labelledby="sign-in-into-the-app"
        data-testid="login-form"
      >
        <HeadingLevel>
          <Heading
            id="sign-in-into-the-app"
            className="login-form__header text-header-h1 text-right text-6xl font-sans"
          >
            Hi there!
          </Heading>
        </HeadingLevel>

        <FormGroup className="login-form__field flex flex-col text-xl" data-testid="login-field">
          <FormLabel name={form.names.email} className="text-input-label">
            login
          </FormLabel>
          <FormInput
            className="bg-input-bg text-input-text p-4 rounded"
            name={form.names.email}
            placeholder="John.Doe@email.com"
            required
          />
          <FormError
            name={form.names.email}
            className="text-red-400"
            data-testid="login-form__error-message-login"
          >
            Login field is required
          </FormError>
        </FormGroup>

        <FormGroup className="login-form__field flex flex-col text-xl" data-testid="password-field">
          <FormLabel name={form.names.password} className="text-input-label">
            password
          </FormLabel>
          <FormInput
            className="bg-input-bg text-input-text p-4 rounded"
            type="password"
            name={form.names.password}
            required
          />
          <FormError
            name={form.names.password}
            className="text-red-400"
            data-testid="login-form__error-message-password"
          >
            Password field is required
          </FormError>
        </FormGroup>

        <Button
          className="login-form__button bg-primary w-full text-xl py-4 text-center rounded hover:bg-primary-lighter text-light"
          type="submit"
          data-testid="login-button"
        >
          Sign in
        </Button>
      </Form>
    </div>
  );
};
