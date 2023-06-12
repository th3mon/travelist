import React from 'react';
import {
  Button,
  Form,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
  HeadingLevel,
  useFormStore,
} from '@ariakit/react';
import {
  StyledFormError,
  StyledFormInput,
  StyledFormLabel,
  StyledHeading,
  StyledPrimaryButton,
} from '@/components';

export const Login: React.FunctionComponent = function () {
  const form = useFormStore({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  form.useValidate(() => {
    if (!form.getValue('email')) {
      form.setError('email', 'Login field is required');
    }

    if (!form.getValue('password')) {
      form.setError('password', 'Password field is required');
    }
  });

  return (
    <div className="login-page w-1/2" data-testid="login-page">
      <Form
        className="login-form flex flex-col gap-8"
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

        <FormGroup
          className="login-form__field flex flex-col text-xl gap-1"
          data-testid="login-field"
        >
          <StyledFormLabel>
            <FormLabel name={form.names.email}>login</FormLabel>
          </StyledFormLabel>
          <StyledFormInput>
            <FormInput name={form.names.email} placeholder="John.Doe@email.com" required />
          </StyledFormInput>
          <StyledFormError>
            <FormError name={form.names.email} data-testid="login-form__error-message-login" />
          </StyledFormError>
        </FormGroup>

        <FormGroup
          className="login-form__field flex flex-col text-xl gap-1"
          data-testid="password-field"
        >
          <StyledFormLabel>
            <FormLabel name={form.names.password}>password</FormLabel>
          </StyledFormLabel>
          <StyledFormInput>
            <FormInput name={form.names.password} type="password" placeholder="password" required />
          </StyledFormInput>
          <StyledFormError>
            <FormError
              name={form.names.password}
              data-testid="login-form__error-message-password"
            />
          </StyledFormError>
        </FormGroup>

        <StyledPrimaryButton>
          <Button type="submit" data-testid="login-button">
            Sign in
          </Button>
        </StyledPrimaryButton>
      </Form>
    </div>
  );
};

export default Login;
