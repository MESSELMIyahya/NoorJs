// __ The NoorJs render function logic __

import {
  _NoorClassComponentInterface,
  _NoorComponentType,
  _NoorElementType,
  _NoorNodeType,
} from "@noorjs/types";
import { invokeComponent } from "../invok-component";

// renderChild function logic

function renderChild(
  child: _NoorNodeType,
  parent: HTMLElement | DocumentFragment
) {
  // if the child is 'null'
  if (child === null) {
    return;
  }
  // if the child is an array of children
  else if (Array.isArray(child)) {
    // create a fragment for the array
    const fragment = document.createDocumentFragment();

    // render each pare
    child.forEach((sub_child) => {
      // render each sub child
      renderChild(sub_child, fragment);
    });

    // append the fragment to the parent
    parent.appendChild(fragment);
  }
  // check if the child is an element
  else if (typeof child === "object") {
    // element
    render(
      (child as _NoorElementType).type,
      (child as _NoorElementType).props,
      parent as HTMLElement
    );
  } else if (typeof child == "boolean") {
    // if the child is a 'boolean' or 'null'
    return;
    // Do Something Here Later
  } else if (typeof child == "number" || typeof child == "string") {
    // if the child is a 'string' or 'number'
    // create a text node
    const text_node = document.createTextNode(child?.toString() || "");
    // append to it the parent
    parent.appendChild(text_node);
  }
}

// render function logic

export function render(
  type: _NoorElementType["type"],
  props: _NoorElementType["props"],
  container: HTMLElement | DocumentFragment
) {
  // if the type is a string (e.g html tag)
  if (typeof type == "string") {
    // create the html element

    const _ele = document.createElement(type);

    // setting the props
    Object.keys(props).forEach((key) => {
      // if the key is the children
      if (key == "children") return;
      // if the key is an event handler
      else if (key.startsWith("on") && typeof props[key] == "function") {
        // setting the method to _ele
        (_ele as any)[key.toLocaleLowerCase()] = props[key];
      }
      // if the key is the style
      else if (key === "style" && typeof props[key] == "object") {
        // loop over the style properties
        Object.keys(props["style"]).forEach((style_property) => {
          // set the style property to the _ele style object
          _ele.style[style_property as any] = props["style"][style_property];
        });
      }
      // if the key is the className
      else if (key == "className") {
        _ele.setAttribute("class", props[key]);
      } else {
        _ele.setAttribute(key, props[key]);
      }
    });
    // rendering the children
    if (props.children) {
      // children are array
      if (Array.isArray(props.children)) {
        props.children.forEach((child) => renderChild(child, _ele));
      }
    }

    // append the child
    container.appendChild(_ele);
  }
  // else is a class component
  else {
    // invoke the component and get the parent child
    const parentChild = invokeComponent(type as _NoorComponentType, props);

    // create a fragment
    const fragment_parent = document.createDocumentFragment();

    // render the children
    // rendering the children from the parent children
    if (parentChild) {
      // parent child is not an array
      renderChild(parentChild, fragment_parent);
    }

    // append the child
    container.appendChild(fragment_parent);
  }
}
