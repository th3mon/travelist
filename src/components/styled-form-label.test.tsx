import { render, screen } from '@testing-library/react';
import { FormComponent } from './form.mock';
import { StyledFormLabel } from './styled-form-label';

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
