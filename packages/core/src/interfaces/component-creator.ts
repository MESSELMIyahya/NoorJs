import { ComponentFunType, ComponentObjRenderType } from "./component";
import { ComponentCoreDomEvents } from "./component-core-dom-events";
import { ComponentCoreDomMethods } from "./component-core-dom-methods";
import { ComponentCoreDomProperties, ComponentCoreDomPropertiesTypes } from "./component-core-dom-properties";
import { ComponentCoreElementTags } from "./component-core-element-tags";
import { ElementObjRenderType } from "./element";

// Types for the component creator logic

type ComponentCreatorElementType = ComponentCoreElementTags | ComponentFunType;
type ComponentCreatorPropsAllType =
  | ComponentCoreDomPropertiesTypes
  | Record<ComponentCoreDomEvents,any>;

type ComponentCreatorPropsType = Partial<ComponentCreatorPropsAllType>;
type ComponentCreatorChildrenType =
  | ComponentCreatorReturnedType[]
  | ComponentCreatorReturnedType
  | string;
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
