// Importing the core utils and types
import { createRoot } from "./utils/root/createRoot";
import { renderRoot } from "./utils/root/renderRoot";
import {
  ComponentObjType,
  ComponentFunType,
  ComponentFunReturnedType,
} from "./interfaces/component";
import { element } from "./utils/apply/element";
import { applyState } from "./utils/apply/apply-state";

// Exporting the packages

// Core functions/utils
export { createRoot, renderRoot, element, applyState as state };

// Core types
export type {
  ComponentObjType as Component,
  ComponentFunType as FC,
  ComponentFunReturnedType as FCRendered,
  ComponentFunReturnedType,
};
