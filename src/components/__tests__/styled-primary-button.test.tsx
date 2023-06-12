import { render, screen } from '@testing-library/react';
import { StyledPrimaryButton } from '@/components';

describe('StyledFormLabel', () => {
  it('should exist', () => {
    expect(StyledPrimaryButton).toBeDefined();
  });

  it('should render', () => {
    render(
      <StyledPrimaryButton>
        <button>Label</button>
      </StyledPrimaryButton>
    );
  });

  it('should render with default class name', async () => {
    render(
      <StyledPrimaryButton>
        <button>Label</button>
      </StyledPrimaryButton>
    );

    const styledFormLabel = await screen.findByText(/label/i);

    expect(styledFormLabel).toHaveClass(
      'login-form__button bg-primary w-full text-xl py-4 text-center rounded hover:bg-primary-lighter text-light'
    );
  });

  it('should render with custom className', () => {
    render(
      <StyledPrimaryButton className="custom-class">
        <button>Label</button>
      </StyledPrimaryButton>
    );

    const styledFormLabel = screen.getByText(/label/i);

    expect(styledFormLabel).toHaveClass('custom-class');
  });
});
