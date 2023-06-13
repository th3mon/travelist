import React from 'react';
import { FormGroup } from '@ariakit/react';
import { StyledComponent } from '@/components/styled.component';
import { classNamesWithDefault } from '@/components/class-names-with-default';

export const StyledFormGroup: React.FunctionComponent<StyledComponent> = ({
  children,
  className,
}) => {
  const defaultClassNames = 'flex flex-col text-xl gap-1';

  return (
    <FormGroup
      className={classNamesWithDefault(defaultClassNames, className)}
      data-testid="form-group"
    >
      {children}
    </FormGroup>
  );
};
