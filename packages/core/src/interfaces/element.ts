import { ComponentObjRenderType } from "./component";
import { ComponentCoreElementTypes } from "./component-core-element-tags";

// HTML element render Obj Type
interface ElementObjRenderType {
  ele: {
    tag: string;
    element?: ComponentCoreElementTypes<any>;
  };
  html: string;
  parent: (ElementObjRenderType | ComponentObjRenderType) | null;
  children?: (ElementObjRenderType | ComponentObjRenderType)[];
}

export type { ElementObjRenderType };
