import NJFError from "../error/createError";
import { ComponentCreatorPropsType } from "../../interfaces/component-creator";
import { ElementObjRenderType } from "../../interfaces/element";
import { ComponentCoreElementTypes } from "../../interfaces/component-core-element-tags";

// HTML element generator

function elementGenerator(
  tag: string,
  element: ComponentCoreElementTypes<any>,
  props: ComponentCreatorPropsType
): ElementObjRenderType {
  // if the window object is undefined
  if (window == undefined) throw new NJFError("window object is undefined");

  // setting the methods and properties to the element
  Object.keys(props).forEach((key) => {
    element[key as never] = props[key as never] as never;
  });

  // return the obj to be rendered
  return {
    ele: {
      tag: tag,
      element: element,
    },
    html: "",
    parent: null,
    children: [],
  };
}

export { elementGenerator };
