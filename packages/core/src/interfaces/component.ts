import {
  ComponentCoreDomEvents,
  ComponentCoreDomEventsTypes,
} from "./component-core-dom-events";
import { ComponentCoreDomMethods } from "./component-core-dom-methods";
import { ComponentCoreDomProperties } from "./component-core-dom-properties";
import {
  ComponentCoreElementTags,
  ComponentCoreElementTypes,
} from "./component-core-element-tags";
import { ElementObjRenderType } from "./element";
import { ComponentStateMethodType } from "./state";
// Here're all the component types

// Children Type

type ComponentChildrenType = ComponentObjRenderType | ElementObjRenderType;

// Component Fun Returned Type
type ComponentFunReturnedType = () =>
  | string
  | ComponentChildrenType
  | ComponentChildrenType[];

// Component Fun Type
type ComponentFunType<T extends any | undefined | Record<string, any> = any> = (
  this: ComponentObjType<"div"> | any,
  props: T
) => ComponentFunReturnedType;

// Component Obj Type
interface ComponentObjRenderType {
  ele: {
    id: string;
    tag: string;
    element?: ComponentCoreElementTypes<any>;
    cycle: {
      init: (() => void)[];
      mount: (() => void)[];
      render: (() => void)[];
    };
  };
  html: string;
  template: string;
  states: Record<string, any>;
  parent: ComponentObjRenderType | null;
  children?: ComponentChildrenType[];
  options: Record<string, number | string | boolean | null>;
}

// Component Obj Type
interface ComponentObjType<ELE extends ComponentCoreElementTags = "div"> {
  ele: {
    id: string;
    options: Record<string, number | string | boolean | null>;
    template: string;
    tag: ComponentCoreElementTags;
    element?: ComponentCoreElementTypes<ELE>;
    states: Record<string, any>;
    getChildren: () => ComponentChildrenType[];
    states_changes: Record<
      string,
      {
        changes: (() => void)[];
      }
    >;
    cycle: {
      init: (() => void)[];
      mount: (() => void)[];
      render: (() => void)[];
    };
  };
  // render
  render: (
    options: Record<string, number | string | boolean | null>,
    template?: string
  ) => void;
  // set state (vars) methods
  state: ComponentStateMethodType;
  // runs a function when var/vars get(s) changed
  onChange: (fun: () => void, dep: string[]) => void;
  // lifecycle events
  // runs one time after the first rendered
  onMount: (fun: () => void) => void;
  // runs when the component initialized
  onInit: (fun: () => void) => void;
  // runs when every render
  onRender: (fun: () => void) => void;
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
  removeEvent: (event: ComponentCoreDomEvents) => void;
  // view
  // setView to set the innerHTML
  setView: (view: string) => void;
  // setTextView to set the innerText
  setTextView: (view: string) => void;
  // styles
  // style one property
  style: (prop: keyof CSSStyleDeclaration, value: string) => void;
  // style one property
  styles: (props: Partial<Record<keyof CSSStyleDeclaration, string>>) => void;
}

export type {
  ComponentFunType,
  ComponentObjRenderType,
  ComponentFunReturnedType,
  ComponentObjType,
  ComponentChildrenType,
};
