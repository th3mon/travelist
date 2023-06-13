import { render, screen } from '@testing-library/react';
import { StyledFormGroup } from '@/components';
import React from 'react';

describe('StyledFormGroup', () => {
  it('should exist', () => {
    expect(StyledFormGroup).toBeDefined();
  });

  it('should render', () => {
    render(
      <StyledFormGroup>
        <button>Submit</button>
      </StyledFormGroup>
    );
  });

  it('should render with children', async () => {
    render(
      <StyledFormGroup>
        <input type="text" placeholder="text field" />
        <button>Button</button>
      </StyledFormGroup>
    );

    const input = await screen.getByPlaceholderText('text field');
    const button = await screen.getByText('Button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should render with default class names', async () => {
    render(
      <StyledFormGroup>
        <button>Button</button>
      </StyledFormGroup>
    );

    const container = await screen.getByTestId('form-group');

    expect(container).toHaveClass('flex flex-col text-xl gap-1');
  });

  it('should render with custom class names', async () => {
    render(
      <StyledFormGroup className="custom-class">
        <button>Button</button>
      </StyledFormGroup>
    );

    const container = await screen.getByTestId('form-group');

    expect(container).toHaveClass('custom-class flex flex-col text-xl gap-1');
  });
});
