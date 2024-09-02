import { ComponentFunType, ComponentObjRenderType } from "./component";
import { ComponentCoreDomEventsMethodsTypes } from "./component-core-dom-events";
import { ComponentCoreDomPropertiesTypes } from "./component-core-dom-properties";
import { ComponentCoreElementTags } from "./component-core-element-tags";
import { ElementObjRenderType } from "./element";

// Types for the component creator logic

type ComponentCreatorElementType = ComponentCoreElementTags | ComponentFunType;

type ComponentCreatorPropsAllType =
  | ComponentCoreDomPropertiesTypes
  | ComponentCoreDomEventsMethodsTypes;

type ComponentCreatorPropsType = Partial<ComponentCreatorPropsAllType> | null;
type ComponentCreatorChildrenType =
  | ComponentCreatorReturnedType
  | string
  | number
  | null;
type ComponentCreatorReturnedType =
  | ComponentObjRenderType
  | ElementObjRenderType;

type ComponentCreatorType = (
  type: ComponentCreatorElementType,
  props: ComponentCreatorPropsType,
  children: ComponentCreatorChildrenType
) => ComponentCreatorReturnedType;

export type {
  ComponentCreatorElementType,
  ComponentCreatorPropsType,
  ComponentCreatorChildrenType,
  ComponentCreatorReturnedType,
  ComponentCreatorType,
};
