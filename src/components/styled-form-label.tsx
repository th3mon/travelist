import React from 'react';
import { Children } from './children';
import { addClassToNode } from './add-class-to-node';

type StyledFormLabelProps = {
  children: Children;
  className?: string;
};
export const StyledFormLabel: React.FunctionComponent<StyledFormLabelProps> = ({
  children,
  className,
}) => {
  const defaultClassName = 'text-input-label';
  const classNamesWithDefault = [defaultClassName, className].join(' ');

  return addClassToNode(children, classNamesWithDefault);
};
