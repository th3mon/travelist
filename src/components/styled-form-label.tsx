import React from 'react';
import { addClassToNode } from './add-class-to-node';
import { StyledComponent } from './styled.component';
import { classNamesWithDefault } from './class-names-with-default';

export const StyledFormLabel: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassName = 'text-input-label';

  return addClassToNode(children, classNamesWithDefault(defaultClassName, className));
};
