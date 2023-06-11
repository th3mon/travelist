import React from 'react';
import { Form, useFormStore } from '@ariakit/react';

export const FormComponent: React.FunctionComponent<{
  children: JSX.Element[] | JSX.Element | string;
}> = ({ children }) => {
  const form = useFormStore({
    defaultValues: {
      name: 'John Doe',
    },
  });

  return <Form store={form}>{children}</Form>;
};
