import { ComponentCoreElementTypes } from "../../../interfaces/component-core-element-tags";
import { ComponentCreatorPropsType } from "../../../interfaces/component-creator";
import { ElementObjRenderType } from "../../../interfaces/element";

// HTML element generator

function elementGenerator(
  tag: string,
  element: ComponentCoreElementTypes<any>,
  props: ComponentCreatorPropsType
): ElementObjRenderType {
  // setting the methods and properties to the element
  // check if the props param isn't null
  if (props !== null) {
    Object.keys(props).forEach((key) => {
      // if the property is style
      if (key == "style") {
        // sets the style to style object in the element one by one
        // generating an array of the style props keys
        const stylesKeys = Object.keys(props["style" as never]);
        // looping on the keys
        stylesKeys.forEach((keyStyle) => {
          // setting the style to prop;
          element!.style[keyStyle as never] = props["style" as never][
            keyStyle as keyof CSSStyleDeclaration
          ] as string;
        });
      }
      // if the property is a event
      else if (key.startsWith("on")) {
        // event
        element[key.toLocaleLowerCase() as never] = props[
          key as never
        ] as never;
      }
      // anther element
      else {
        element[key as never] = props[key as never] as never;
      }
    });
  }

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

export default elementGenerator;
