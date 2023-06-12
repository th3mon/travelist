export const classNamesWithDefault = (
  defaultClassNames: string | string[],
  classNames?: string | string[]
) => [defaultClassNames, classNames].join(' ');
