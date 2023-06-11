import React from 'react';
import { FormLabel } from '@ariakit/react';
import { StringLike } from '@ariakit/core/esm/form/types';

type StyledFormLabelProps = {
  name: StringLike;
  children: JSX.Element[] | JSX.Element | string;
  className?: string;
  props?: Record<string, never>;
};
export const StyledFormLabel: React.FunctionComponent<StyledFormLabelProps> = ({
  name,
  children,
  className,
  ...props
}) => {
  const defaultClassName = 'text-input-label';
  const classNamesWithDefault = [defaultClassName, className].join(' ');

  return (
    <FormLabel name={name} className={classNamesWithDefault} {...props}>
      {children}
    </FormLabel>
  );
};
