import React from 'react';
import { Heading } from '@ariakit/react';

type StyledHeadingProps = {
  children: JSX.Element[] | JSX.Element | string;
  className?: string;
  id?: string;
};
export const StyledHeading: React.FunctionComponent<StyledHeadingProps> = ({
  children,
  className,
  id,
}): JSX.Element => {
  const defaultClassNames = 'text-header font-sans';
  const classNameWithDefaults = `${className ? `${className} ` : ''}${defaultClassNames}`;

  return (
    <Heading className={classNameWithDefaults} id={id}>
      {children}
    </Heading>
  );
};
