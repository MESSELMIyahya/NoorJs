// __ The NoorJs invoke component function logic __

import {
  _NoorComponentType,
  _NoorElementType,
  _NoorNodeType,
} from "@noorjs/types";

// the invokeComponent function is a function that take the class component object and its props and invoke it and call its 'paint' method with the class property constructor and returns the children

// invokeComponent logic

export function invokeComponent(
  Component: _NoorComponentType,
  props: _NoorElementType["props"]
): _NoorNodeType {
  // invoke the class component
  const invoked_component = new Component();

  // prepare the class constructor object to bind it to the 'paint'
  const _class_object = Object.create(Component.prototype);

  // Copy instance properties from invoked_component
  Object.assign(_class_object, invoked_component);

  // setting the props to the _class_object
  _class_object["props"] = props;

  //  create a 'paint' function with a 'this' sets to the '_class_object' (to provide with class method & properties) *NOTE - If we don't do this the 'paint' method will be called with the 'this' set to the 'window' object
  const bound_paint = invoked_component.paint.bind(_class_object);

  // // call the bound paint
  const parentChild = bound_paint();

  //  *NOTE - Here where the lifecycle method will be invoked in

  //  returning the parent child
  return parentChild;
}
