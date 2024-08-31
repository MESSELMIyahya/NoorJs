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
import { ComponentStateMethodType } from "./state";
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
    cycle: {
      init: (() => void)[];
      mount: (() => void)[];
      render: (() => void)[];
    };
  };
  html: string;
  template: string;
  states:Record<string,any>;
  parent: ComponentObjRenderType | null;
  children?: ComponentObjRenderType[];
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
    states:Record<string,any>;
    states_changes: Record<
      string,
      {
        var: any;
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
  onChange: (fun: () => void,dep:Record<string,any>) => void;
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
};
