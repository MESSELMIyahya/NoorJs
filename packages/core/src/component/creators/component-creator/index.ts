import { ComponentFunType } from "../../../interfaces/component";
import { ComponentCoreElementTags } from "../../../interfaces/component-core-element-tags";
import {
  ComponentCreatorPropsType,
  ComponentCreatorChildrenType,
  ComponentCreatorReturnedType,
  ComponentCreatorChildrenPropertiesType,
} from "../../../interfaces/component-creator";
import componentGenerator from "../../generators/component-generator";
import elementGenerator from "../../generators/element-generator";
import componentCreator_Nested_Children_handler from "./utils/nested-children-arrays";

// Function to create a component element

function ComponentCreator<
  T extends ComponentFunType | ComponentCoreElementTags,
>(
  type: T,
  props: T extends ComponentFunType
    ? Parameters<T>[0] extends undefined
      ? null
      : Parameters<T>[0]
    : T extends ComponentCoreElementTags
      ? ComponentCreatorPropsType
      : null,
  ...children: ComponentCreatorChildrenType[]
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
      props as ComponentCreatorPropsType
    );
  } else {
    // generating the component
    renderObj = componentGenerator(type as ComponentFunType, props);
  }

  // setting the parent to null
  renderObj.parent = null;
  const children_render_objs: ComponentCreatorReturnedType[] = [
    ...(renderObj.children || []),
  ];

  // children
  // array of children
  if (Array.isArray(children)) {
    // change nested arrays to one array of elements
    const childrenElements: ComponentCreatorChildrenPropertiesType[] =
      componentCreator_Nested_Children_handler(children);

    // add this renderObj to these children their as parent
    // setting the children
    childrenElements.forEach((child) => {
      // check if the child is a null
      if (child == null) {
        renderObj.html += "";
      }
      // check if the child is a number
      else if (typeof child == "number") {
        renderObj.html += "" + child.toString();
      }
      // check if the child is a string
      else if (typeof child == "string") {
        renderObj.html += "" + child;
      } else
        children_render_objs.push({
          ...child,
          parent: { ...renderObj },
        } as ComponentCreatorReturnedType);
    });
  }

  // set the children render objs to the renderObj children array
  renderObj.children = children_render_objs;

  // return the obj
  return renderObj;
}

export default ComponentCreator;
