import React from 'react';
import { StyledComponent } from '@/components/styled.component';
import { addClassToNode } from '@/components/add-class-to-node';
import { classNamesWithDefault } from '@/components/class-names-with-default';

export const StyledPrimaryButton: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassName =
    'login-form__button bg-primary w-full text-xl py-4 text-center rounded hover:bg-primary-lighter text-light';

  return addClassToNode(children, classNamesWithDefault(defaultClassName, className));
};
