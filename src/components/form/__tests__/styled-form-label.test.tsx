import { render, screen } from '@testing-library/react';
import { StyledFormLabel } from '@/components';

describe('StyledFormLabel', () => {
  it('should exist', () => {
    expect(StyledFormLabel).toBeDefined();
  });

  it('should render', () => {
    render(
      <StyledFormLabel>
        <label>Label</label>
      </StyledFormLabel>
    );
  });

  it('should render with default class name', async () => {
    render(
      <StyledFormLabel>
        <label>Label</label>
      </StyledFormLabel>
    );

    const styledFormLabel = await screen.findByText(/label/i);

    expect(styledFormLabel).toHaveClass('text-input-label');
  });

  it('should render with custom className', () => {
    render(
      <StyledFormLabel className="custom-class">
        <label>Label</label>
      </StyledFormLabel>
    );

    const styledFormLabel = screen.getByText(/label/i);

    expect(styledFormLabel).toHaveClass('custom-class');
  });
});
