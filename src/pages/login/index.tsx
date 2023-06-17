import React from 'react';
import {
  Button,
  Form,
  FormError,
  FormInput,
  FormLabel,
  HeadingLevel,
  useFormStore,
} from '@ariakit/react';
import {
  StyledFormError,
  StyledFormGroup,
  StyledFormInput,
  StyledFormLabel,
  StyledHeading,
  StyledPrimaryButton,
} from '@/components';

const LoginPageBackgroundPicture: () => JSX.Element = () => {
  const mainClassName = 'login-page__picture';
  const background: string[] = [
    'bg-cover',
    'bg-[url(https://source.unsplash.com/1600x900/?space,star,galaxy)]',
  ];
  const position: string[] = ['absolute', 'bottom-0', 'top-0', 'left-0', 'right-0', 'z-10'];
  const lg: string[] = ['lg:inset-y-0', 'lg:left-0', 'lg:w-8/12'];
  const classNames: string = [mainClassName, ...background, ...position, ...lg].join(' ');

  return <div className={classNames} />;
};

const LoginPageBackground: () => JSX.Element = () => {
  const mainClassName = 'login-page__background';
  const background = 'bg-yankees-blue';
  const position: string[] = ['z-20', 'top-0', 'bottom-1/4', 'left-0', 'right-0'];
  const lg: string[] = [
    'lg:absolute',
    'lg:bottom-0',
    'lg:left-1/4',
    'lg:-right-1/4',
    'lg:-skew-x-6',
  ];
  const xl = 'xl:left-1/2';
  const classNames: string = [mainClassName, background, ...position, ...lg, xl].join(' ');

  return <div className={classNames} />;
};

export const Login: React.FunctionComponent = function () {
  const form = useFormStore({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginFormClassNames = Object.values({
    main: 'login-page__form',
    whiteSpace: 'p-5 pb-10',
    background: 'bg-yankees-blue',
    flex: 'flex flex-col gap-8',
    position: 'relative z-30',
    lg: 'lg:p-0 lg:bg-transparent lg:absolute lg:inset-y-20 lg:right-10 lg:left-auto lg:w-2/3 lg:translate-x-[auto]',
    lx: 'xl:w-2/5',
  }).join(' ');

  form.useValidate(() => {
    if (!form.getValue('email')) {
      form.setError('email', 'Login field is required');
    }

    if (!form.getValue('password')) {
      form.setError('password', 'Password field is required');
    }
  });

  return (
    <div
      className="
        login-page
        relative
        min-h-screen
        md:m-auto
        md:min-w-full
        md:overflow-hidden
      "
      data-testid="login-page"
    >
      <LoginPageBackgroundPicture />
      <LoginPageBackground />
      <Form
        className={loginFormClassNames}
        store={form}
        aria-labelledby="sign-in-into-the-app"
        data-testid="login-form"
      >
        <HeadingLevel>
          <StyledHeading
            className="
              login-form__header
              text-6xl
              md:text-right
            "
            id="sign-in-into-the-app"
          >
            Hi there!
          </StyledHeading>
        </HeadingLevel>

        <StyledFormGroup className="login-form__field" data-testid="login-field">
          <StyledFormLabel>
            <FormLabel name={form.names.email}>login</FormLabel>
          </StyledFormLabel>
          <StyledFormInput>
            <FormInput name={form.names.email} placeholder="John.Doe@email.com" required />
          </StyledFormInput>
          <StyledFormError>
            <FormError name={form.names.email} data-testid="login-form__error-message-login" />
          </StyledFormError>
        </StyledFormGroup>

        <StyledFormGroup className="login-form__field" data-testid="password-field">
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
        </StyledFormGroup>

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
