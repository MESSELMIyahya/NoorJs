import _NoorClassComponentInterface from "./class-component";
import _NoorClassComponentContextType from "./component-context";

// _The Noor Js Component Function Type

// type
export type _NoorComponentType = {
  new (...args: any[]): _NoorClassComponentInterface;
  property: {
    _$ctx: _NoorClassComponentContextType;
    [key: string]: any;
  };
};
