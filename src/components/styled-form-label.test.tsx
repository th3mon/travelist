import { render, screen } from '@testing-library/react';
import { StyledFormLabel } from './styled-form-label';
import { Form, useFormStore } from '@ariakit/react';
import React from 'react';

const FormComponent: React.FunctionComponent<{
  children: JSX.Element[] | JSX.Element | string;
}> = ({ children }) => {
  const form = useFormStore({
    defaultValues: {
      name: 'John Doe',
    },
  });

  return <Form store={form}>{children}</Form>;
};
describe('StyledFormLabel', () => {
  it('should exist', () => {
    expect(StyledFormLabel).toBeDefined();
  });

  it('should render', () => {
    const name = 'Label';

    render(
      <FormComponent>
        <StyledFormLabel name={name}>Label</StyledFormLabel>
      </FormComponent>
    );
  });

  it('should render with default class name', async () => {
    const name = 'Label';

    render(
      <FormComponent>
        <StyledFormLabel name={name}>Label</StyledFormLabel>
      </FormComponent>
    );

    const styledFormLabel = await screen.findByText(name);

    expect(styledFormLabel).toHaveClass('text-input-label');
  });
  it('should render with custom className', () => {
    const name = 'Label';

    render(
      <FormComponent>
        <StyledFormLabel name={name} className="custom-class">
          Label
        </StyledFormLabel>
      </FormComponent>
    );

    const styledFormLabel = screen.getByText(name);

    expect(styledFormLabel).toHaveClass('custom-class');
  });
});
