import _NoorClassComponentContextType from "./component-context";

// _The Noor Js Component Function Type

// type
export type _NoorComponentType = Function & {
  property: {
    _$ctx: _NoorClassComponentContextType;
    [key: string]: any;
  };
};
