// Importing the core utils and types
import renderRoot from "./root/renderRoot";
import createRoot from "./root/createRoot";
import {
  ComponentObjType,
  ComponentFunType,
  ComponentFunReturnedType,
} from "./interfaces/component";
import elementPlug from "./plugs/element";
import ComponentCreator from "./component/creators/component-creator";

// import the NoorJs global Jsx types
import "./interfaces/jsx";

// Exporting the packages
// Core functions/utils
export { createRoot, renderRoot, elementPlug as element, ComponentCreator };

// Core types
export type {
  ComponentObjType as Component,
  ComponentFunType as FC,
  ComponentFunReturnedType as FCRendered,
  ComponentFunReturnedType,
};
