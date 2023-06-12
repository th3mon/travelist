import React from 'react';
import { StyledComponent } from '../styled.component';
import { addClassToNode } from '../add-class-to-node';
import { classNamesWithDefault } from '../class-names-with-default';

export const StyledFormError: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassName = 'text-red-400';

  return addClassToNode(children, classNamesWithDefault(defaultClassName, className));
};
