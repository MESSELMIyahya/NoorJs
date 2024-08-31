// The this_obj state types (methods,properties)

type ComponentStateMethodGetterType<T> = () => T;
type ComponentStateMethodSetterType<T> = (value: T | ((c: T) => T)) => T;

type ComponentStateMethodType = <T extends any>(
  initialValue: T
) => [ComponentStateMethodGetterType<T>, ComponentStateMethodSetterType<T>];

export type {
  ComponentStateMethodType,
  ComponentStateMethodGetterType,
  ComponentStateMethodSetterType,
};
