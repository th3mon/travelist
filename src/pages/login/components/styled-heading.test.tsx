import { render } from '@testing-library/react';
import { StyledHeading } from './styled-heading';

describe('StyledHeading', () => {
  it('should exist', () => {
    expect(<StyledHeading>Heading</StyledHeading>).toBeDefined();
  });

  it('should render', () => {
    render(<StyledHeading>Heading</StyledHeading>);
  });

  it('should have a default class names', () => {
    const { container } = render(<StyledHeading>Heading</StyledHeading>);

    expect(container.firstChild).toHaveClass('text-header');
    expect(container.firstChild).toHaveClass('font-sans');
  });

  it('should have a given class name', () => {
    const customClassName = 'text-red-500';
    const { container } = render(
      <StyledHeading className={customClassName}>Heading</StyledHeading>
    );

    expect(container.firstChild).toHaveClass(customClassName);
  });

  it('should have a given class names', () => {
    const customClassNames = ['text-red-500', 'font-sans-serif', 'font-bold'];
    const { container } = render(
      <StyledHeading className={customClassNames.join(' ')}>Heading</StyledHeading>
    );

    expect(container.firstChild).toHaveClass(customClassNames[0]);
    expect(container.firstChild).toHaveClass(customClassNames[1]);
    expect(container.firstChild).toHaveClass(customClassNames[2]);
  });

  it('should have an id', () => {
    const { container } = render(<StyledHeading id="heading">Heading</StyledHeading>);

    expect(container.firstChild).toHaveAttribute('id', 'heading');
  });
});
