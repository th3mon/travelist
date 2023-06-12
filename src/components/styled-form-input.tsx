import React from 'react';
import { addClassToNode } from './add-class-to-node';
import { StyledComponent } from './styled.component';
import { classNamesWithDefault } from './class-names-with-default';

export const StyledFormInput: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassNames = 'bg-input-bg text-input-text p-4 rounded';

  return addClassToNode(children, classNamesWithDefault(defaultClassNames, className));
};
