import { ComponentCoreDomEvents, ComponentCoreDomEventsTypes } from "./component-core-dom-events";
import { ComponentCoreDomMethods } from "./component-core-dom-methods";
import { ComponentCoreDomProperties } from "./component-core-dom-properties";
import {
  ComponentCoreElementTags,
  ComponentCoreElementTypes,
} from "./component-core-element-tags";
// Here're all the component types

// Component Fun Returned Type
type ComponentFunReturnedType = 
  | string
  | [Record<string, number | string | boolean | null>, string];

// Component Fun Type
type ComponentFunType = () => ComponentFunReturnedType;

// Component Obj Type
interface ComponentObjRenderType {
  ele: {
    id: string;
    tag: string;
    element?: ComponentCoreElementTypes<any>;
  };
  html:string;
  template:string;
  states: any[];
  parent:ComponentObjRenderType|null;
  children?:ComponentObjRenderType[];
  options: Record<string, number | string | boolean | null>;
}

// Component Obj Type
interface ComponentObjType<ELE extends ComponentCoreElementTags = "div"> {
  states: any[];
  ele: {
    id: string;
    options: Record<string, number | string | boolean | null>;
    template:string;
    tag: ComponentCoreElementTags;
    element?: ComponentCoreElementTypes<ELE>;
  };
  // render 
  render:(options:Record<string, number | string | boolean | null>,template?:string)=>void,
  // methods
  methods: ComponentCoreDomMethods;
  // Properties
  // Setting & getting the core properties
  set: (name: ComponentCoreDomProperties, value: any) => any;
  get: (name: ComponentCoreDomProperties) => any;
  // Events
  // setting the events and the render lifecycle it uses the core events under the hook
  // setEvent to set the event
  setEvent: <T extends ComponentCoreDomEvents>(
    event: T,
    fun: ComponentCoreDomEventsTypes<T>
  ) => void;
  // removeEvent to remove the event
  removeEvent:(
    event: ComponentCoreDomEvents
  ) => void;
}

export type {
  ComponentFunType,
  ComponentObjRenderType,
  ComponentFunReturnedType,
  ComponentObjType,
};
