// This file is for re-exporting all the types/interfaces

// importing the types/interfaces
import _NoorElementType from "./interfaces/element";
import _NoorClassComponentInterface from "./interfaces/class-component";
import _NoorClassComponentContextType from "./interfaces/component-context";
import { _NoorComponentType } from "./interfaces/component"
import {
  _NoorNodeType,
  _NoorEmptyType,
  _NoorFragmentType,
  _NoorTextType,
} from "./interfaces/global";

// exporting the types
export type {
  _NoorElementType,
  _NoorClassComponentInterface,
  _NoorClassComponentContextType,
  _NoorNodeType,
  _NoorEmptyType,
  _NoorFragmentType,
  _NoorTextType,
  _NoorComponentType
};
