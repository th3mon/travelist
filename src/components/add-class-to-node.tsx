import React, { ReactElement, ReactNode } from 'react';

export const addClassToNode = (node: ReactNode, className: string): ReactElement | null => {
  if (!node) {
    return node as ReactElement | null;
  }

  if (typeof node !== 'object') {
    return <span className={className}>{node}</span>;
  }

  if ('props' in node) {
    const existing: unknown = node?.props?.className;

    if (existing && typeof existing === 'string') {
      className = `${existing} ${className}`;
    }

    return React.cloneElement(node, { className });
  }

  return <div className={className}>{node}</div>;
};
