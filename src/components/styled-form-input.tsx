import React from 'react';
import { Children } from './children';
import { addClassToNode } from './add-class-to-node';

type StyledFormInputProps = {
  children: Children;
  className?: string;
};
export const StyledFormInput: React.FunctionComponent<StyledFormInputProps> = ({
  children,
  className,
}) => {
  const defaultClassNames = 'bg-input-bg text-input-text p-4 rounded';
  const classNamesWithDefault = [defaultClassNames, className].join(' ');

  return addClassToNode(children, classNamesWithDefault);
};
