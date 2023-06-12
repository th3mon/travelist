import { render, screen } from '@testing-library/react';
import { StyledFormError } from './styled-form-error';

describe('StyledFormError', () => {
  it('should exist', () => {
    expect(StyledFormError).toBeDefined();
  });

  it('should render', () => {
    render(
      <StyledFormError>
        <p>Error</p>
      </StyledFormError>
    );
  });

  it('should render with default class name', async () => {
    render(
      <StyledFormError>
        <p>Error</p>
      </StyledFormError>
    );

    const styledFormError = await screen.getByText(/error/i);

    expect(styledFormError).toHaveClass('text-red-400');
  });

  it('should render with custom class name', async () => {
    render(
      <StyledFormError className="custom-class">
        <p>Error</p>
      </StyledFormError>
    );

    const styledFormError = await screen.getByText(/error/i);

    expect(styledFormError).toHaveClass('custom-class');
  });
});
