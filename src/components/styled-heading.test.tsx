import { render, screen } from '@testing-library/react';
import { StyledHeading } from './styled-heading';

describe('StyledHeading', () => {
  it('should exist', () => {
    expect(<StyledHeading>Heading</StyledHeading>).toBeDefined();
  });

  it('should render', () => {
    render(<StyledHeading>Heading</StyledHeading>);
  });

  it('should have a default class names', async () => {
    render(<StyledHeading>Heading</StyledHeading>);

    const styledHeading = await screen.findByText('Heading');

    expect(styledHeading).toHaveClass('text-header');
    expect(styledHeading).toHaveClass('font-sans');
  });

  it('should have a given class name', async () => {
    const customClassName = 'text-red-500';
    render(<StyledHeading className={customClassName}>Heading</StyledHeading>);

    const styledHeading = await screen.findByText('Heading');

    expect(styledHeading).toHaveClass(customClassName);
  });

  it('should have a given class names', async () => {
    const customClassNames = ['text-red-500', 'font-sans-serif', 'font-bold'];
    const { container } = render(
      <StyledHeading className={customClassNames.join(' ')}>Heading</StyledHeading>
    );

    const styledHeading = await screen.findByText('Heading');

    expect(styledHeading).toHaveClass(customClassNames[0]);
    expect(styledHeading).toHaveClass(customClassNames[1]);
    expect(styledHeading).toHaveClass(customClassNames[2]);
  });

  it('should have an id', async () => {
    render(<StyledHeading id="heading">Heading</StyledHeading>);

    const styledHeading = await screen.findByText('Heading');

    expect(styledHeading).toHaveAttribute('id', 'heading');
  });
});
