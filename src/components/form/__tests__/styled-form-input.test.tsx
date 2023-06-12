import { render, screen } from '@testing-library/react';
import { StyledFormInput } from '@/components';

describe('StyledFormInput', () => {
  it('should exist', () => {
    expect(StyledFormInput).toBeDefined();
  });

  it('should render', () => {
    render(
      <StyledFormInput>
        <input type="text" />
      </StyledFormInput>
    );
  });

  it('should render with default class names', async () => {
    const placeholder = 'placeholder text';
    const defaultClassNames = 'bg-input-bg text-input-text p-4 rounded';

    render(
      <StyledFormInput>
        <input type="text" placeholder={placeholder} />
      </StyledFormInput>
    );

    const styledInput = await screen.getByPlaceholderText(placeholder);

    expect(styledInput).toHaveClass(defaultClassNames);
  });
});
