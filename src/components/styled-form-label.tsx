import React from 'react';
import { addClassToNode } from './add-class-to-node';
import { StyledComponent } from './styled.component';

export const StyledFormLabel: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassName = 'text-input-label';
  const classNamesWithDefault = [defaultClassName, className].join(' ');

  return addClassToNode(children, classNamesWithDefault);
};
