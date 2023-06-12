import React from 'react';
import { addClassToNode } from './add-class-to-node';
import { StyledComponent } from './styled.component';

export const StyledFormInput: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassNames = 'bg-input-bg text-input-text p-4 rounded';
  const classNamesWithDefault = [defaultClassNames, className].join(' ');

  return addClassToNode(children, classNamesWithDefault);
};
