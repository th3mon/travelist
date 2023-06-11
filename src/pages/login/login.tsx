import React from 'react';
import {
  Button,
  Form,
  FormError,
  FormGroup,
  FormInput,
  HeadingLevel,
  useFormStore,
} from '@ariakit/react';
import { StyledFormLabel, StyledFormInput, StyledHeading } from '@/components';

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
          <StyledHeading
            className="login-form__header text-right text-6xl"
            id="sign-in-into-the-app"
          >
            Hi there!
          </StyledHeading>
        </HeadingLevel>

        <FormGroup className="login-form__field flex flex-col text-xl" data-testid="login-field">
          <StyledFormLabel name={form.names.email}>login</StyledFormLabel>
          <StyledFormInput>
            <FormInput name={form.names.email} placeholder="John.Doe@email.com" required />
          </StyledFormInput>
          <FormError
            name={form.names.email}
            className="text-red-400"
            data-testid="login-form__error-message-login"
          />
        </FormGroup>

        <FormGroup className="login-form__field flex flex-col text-xl" data-testid="password-field">
          <StyledFormLabel name={form.names.password}>password</StyledFormLabel>
          <StyledFormInput>
            <FormInput name={form.names.password} type="password" placeholder="password" required />
          </StyledFormInput>
          <FormError
            name={form.names.password}
            className="text-red-400"
            data-testid="login-form__error-message-password"
          />
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
