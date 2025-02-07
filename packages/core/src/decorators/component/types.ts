//  __The @Component Decorator Types__

import { _NoorClassComponentInterface } from "../../interfaces";

// The @Component Decorator Options

interface COMPONENT_DECORATOR_OPTIONS_INTERFACE {}

// Component Decorator Function Typ
type COMPONENT_DECORATOR_FUNCTION_TYPE = (
  Options?: COMPONENT_DECORATOR_OPTIONS_INTERFACE
) => (
  constructor:
    | {
        new (...args: any[]): {};
        prototype: _NoorClassComponentInterface;
      }
    | Function
) => void;

// Exporting types

export type {
  COMPONENT_DECORATOR_FUNCTION_TYPE,
  COMPONENT_DECORATOR_OPTIONS_INTERFACE,
};
