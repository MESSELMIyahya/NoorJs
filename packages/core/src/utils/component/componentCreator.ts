import { ComponentFunType } from "../../interfaces/component";
import { ComponentCoreElementTags } from "../../interfaces/component-core-element-tags";
import {
  ComponentCreatorElementType,
  ComponentCreatorPropsType,
  ComponentCreatorChildrenType,
  ComponentCreatorReturnedType,
} from "../../interfaces/component-creator";
import { componentGenerator } from "./componentGenerator";
import { elementGenerator } from "./elementGenerator";
// Function to create a component element

function ComponentCreator(
  type: ComponentCreatorElementType,
  props: ComponentCreatorPropsType,
  children: ComponentCreatorChildrenType
): ComponentCreatorReturnedType {
  // Check if the component is html element or component function
  const elementType: "tag" | "component" =
    type instanceof Function ? "component" : "tag";

  //  render object
  let renderObj = {} as ComponentCreatorReturnedType;

  if (elementType === "tag") {
    // html element logic
    const element = document.createElement(type as ComponentCoreElementTags);
    // generating the element render object

    renderObj = elementGenerator(
      type as ComponentCoreElementTags,
      element,
      props
    );
  } else {
    // generating the component
    renderObj = componentGenerator(type as ComponentFunType);
  }

  // setting the parent to null
  renderObj.parent = null;
  const children_render_objs: ComponentCreatorReturnedType[] = [
    ...(renderObj.children || []),
  ];

  // checking the children
  // array of children
  if (Array.isArray(children)) {
    // add this renderObj to these children their as parent
    children.forEach((child) => {
      children_render_objs.push({
        ...child,
        parent: { ...renderObj },
      } as ComponentCreatorReturnedType);
    });
  }
  // one child
  else if (typeof children == "object") {
    // add this renderObj to this child as parent
    children_render_objs.push({
      ...children,
      parent: { ...renderObj },
    } as ComponentCreatorReturnedType);
  }
  // if the children is a string
  else if (typeof children == "string") {
    // set the children to the html
    renderObj.html = children;
  }

  // set the children render objs to the renderObj children array
  renderObj.children = children_render_objs;

  // return the obj
  return renderObj;
}

export { ComponentCreator };
