import { ComponentChildrenType, ComponentFunType, ComponentObjRenderType } from "./component";
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
type ComponentCreatorChildrenPropertiesType =
  | ComponentCreatorReturnedType
  | string
  | number
  | null
type ComponentCreatorChildrenType =
  | ComponentCreatorReturnedType
  | string
  | number
  | null
  | ComponentCreatorChildrenType[];
type ComponentCreatorReturnedType =
ComponentChildrenType

type ComponentCreatorType = (
  type: ComponentCreatorElementType,
  props: ComponentCreatorPropsType,
  children: ComponentCreatorChildrenType
) => ComponentCreatorReturnedType;

export type {
  ComponentCreatorElementType,
  ComponentCreatorPropsType,
  ComponentCreatorChildrenType,
  ComponentCreatorChildrenPropertiesType,
  ComponentCreatorReturnedType,
  ComponentCreatorType,
  ComponentCreatorPropsAllType,
};
