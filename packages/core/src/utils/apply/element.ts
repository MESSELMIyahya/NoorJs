import { ComponentObjType } from "../../interfaces/component";
import {
  ComponentCoreElementTags,
  ComponentCoreElementTypes,
} from "../../interfaces/component-core-element-tags";
import { setComponentSetAttribute } from "./apply-get-set-attribute";
import { setComponentLifecycleMethods } from "./apply-lifecycle-events";
import { setComponentRender } from "./apply-rerender";
import { setComponentSetEvent } from "./apply-setEvent-removeEvent";
import { setComponentState } from "./apply-state";
import { setComponentStyle } from "./apply-style";
import { setComponentDOMMethods } from "./component-set-methods";

// component element method

type Eg = ComponentObjType<any> | any;

function element(tag: ComponentCoreElementTags, this_obj: Eg) {
  this_obj.ele.tag = tag;
  // create the element
  const element: ComponentCoreElementTypes<any> = document.createElement(
    this_obj.ele.tag
  );

  // setting the id to the element
  element.id = this_obj.ele.id;

  //  states/vars
  this_obj.states = [];

  // set the
  this_obj.ele.element = element;

  // Setting the styles methods
  setComponentStyle(this_obj);

  // Setting the core dom methods
  setComponentDOMMethods(this_obj);

  // Setting the set (setAttribute) method
  setComponentSetAttribute(this_obj);

  // Setting the setEvent method
  setComponentSetEvent(this_obj);

  // Setting the render method
  setComponentRender(this_obj);

  // Setting the lifecycle methods
  setComponentLifecycleMethods(this_obj);
}

export { element };
