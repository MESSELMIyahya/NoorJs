import { ComponentFunType, ComponentObjRenderType } from "./component";
import { ComponentCoreElementTags } from "./component-core-element-tags";
import { ElementObjRenderType } from "./element";

// Types for the component creator logic

type ComponentCreatorElementType = ComponentCoreElementTags | ComponentFunType;
type ComponentCreatorPropsType = Partial<
  Record<
    keyof HTMLElement & keyof HTMLInputElement & keyof HTMLFormElement,
    any
  >
>;
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
