import {
  ComponentCoreElementTags,
  ComponentCoreElementTypes,
} from "../../interfaces/component-core-element-tags";
import setComponentDOMMethods from "../../appliers/element/dom-methods-applier";
import setComponentLifecycleMethods from "../../appliers/element/lifecycle-events-applier";
import setComponentStateOnChange from "../../appliers/element/onChange-applier";
import setComponentRender from "../../appliers/element/render-applier";
import setComponentSetEvent from "../../appliers/element/setEvent-removeEvent-applier";
import setComponentSetAttribute from "../../appliers/element/setter-getter-attribute";
import setComponentState from "../../appliers/element/state-applier";
import setComponentStyle from "../../appliers/element/style-applier";
import setComponentSetViews from "../../appliers/element/views-setters-applier";
import { ComponentObjType } from "../../interfaces/component";

// component element method

type Eg = ComponentObjType<any> | any;

function elementPlug(tag: ComponentCoreElementTags, this_obj: Eg) {
  this_obj.ele.tag = tag;
  // create the element
  const element: ComponentCoreElementTypes<any> = document.createElement(
    this_obj.ele.tag
  );

  // setting the id to the element
  element.id = this_obj.ele.id;

  //  states/vars
  this_obj.states = {};

  // set the
  this_obj.ele.element = element;

  // Setting the styles methods
  setComponentStyle(this_obj);

  // Setting hte set view methods
  setComponentSetViews(this_obj);

  // Setting the core dom methods
  setComponentDOMMethods(this_obj);

  // Setting the state method
  setComponentState(this_obj);

  // Setting the set (setAttribute) method
  setComponentSetAttribute(this_obj);

  // Setting the setEvent method
  setComponentSetEvent(this_obj);

  // Setting the render method
  setComponentRender(this_obj);

  // Setting the lifecycle methods
  setComponentLifecycleMethods(this_obj);

  // Setting the states onChange
  setComponentStateOnChange(this_obj);
}

export default elementPlug;
