import React from 'react';
import { Heading } from '@ariakit/react';
import { Children } from './children';

type StyledHeadingProps = {
  children: Children;
  className?: string;
  id?: string;
};
export const StyledHeading: React.FunctionComponent<StyledHeadingProps> = ({
  children,
  className,
  id,
}): JSX.Element => {
  const defaultClassNames = 'text-header font-sans';
  const classNameWithDefaults = [defaultClassNames, className].join(' ');

  return (
    <Heading className={classNameWithDefaults} id={id}>
      {children}
    </Heading>
  );
};
