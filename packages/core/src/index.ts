// Importing the core utils and types
import { createRoot } from "./utils/root/createRoot";
import { renderRoot } from "./utils/root/renderRoot";
import {
  ComponentObjType,
  ComponentFunType,
  ComponentFunReturnedType,
} from "./interfaces/component";
import { element } from "./utils/apply/element";
import { ComponentCreator } from "./utils/component/componentCreator";
// import the NoorJs global Jsx types 
import './interfaces/jsx'; 

// Exporting the packages

// Core functions/utils
export { createRoot, renderRoot, element, ComponentCreator };

// Core types
export type {
  ComponentObjType as Component,
  ComponentFunType as FC,
  ComponentFunReturnedType as FCRendered,
  ComponentFunReturnedType,
};
