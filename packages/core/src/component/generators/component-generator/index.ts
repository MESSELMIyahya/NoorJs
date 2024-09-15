import {
  ComponentFunType,
  ComponentObjRenderType,
  ComponentObjType,
} from "../../../interfaces/component";
import elementIdGenerator from "../../../utils/element-id-generator";
import componentReturnedHandler from "../../handlers/component-returned-handler";
import { componentLifecycleInit } from "../../lifecycle/component-lifecycle";
import NJFError from "../../../utils/error";

// component generator

function componentGenerator<T extends ComponentFunType>(
  component: ComponentFunType,
  params?: Parameters<T>[0]
): ComponentObjRenderType {
  // if the window object is undefined
  if (window == undefined) throw new NJFError("window object is undefined");

  const componentId = elementIdGenerator();

  const this_obj: ComponentObjType<any> = Object.create({
    ele: {
      id: componentId,
      options: {},
      tag: "div",
      cycle: { init: [], mount: [], render: [] },
      states: {},
      children: [],
      channel: {
        provider: {
          is: false,
          id: null,
        },
        accessors: [],
      },
      states_changes: {},
    },
    methods: {},
    get: {},
    set: {},
  });
  // bind the this_obj to the component
  const component_bind = component.bind(this_obj);

  //   call the component
  const called_component = component_bind(params);

  // throw error if the dev didn't call the element function inside the component
  if (!this_obj.ele.element) {
    throw new NJFError(
      "Please call the 'element' function to initialize the component",
      "NotCalled"
    );
  }
  // run the init lifecycle methods
  componentLifecycleInit(this_obj.ele.cycle.init);

  // handling the returned value form the component
  const { children, getter, options, template } =
    componentReturnedHandler(called_component);

  // setting the options to the this_obj options
  this_obj.ele.options = options;

  // setting the template to the this_obj template
  this_obj.ele.template = template;

  // setting the getChildren to the this_obj getChildren
  this_obj.ele.getChildren = getter;

  // generate the template
  // const rendered_template = templateRenderer(template, options);

  // return the obj to be rendered
  return {
    ele: {
      cycle: this_obj.ele.cycle,
      id: this_obj.ele.id,
      tag: this_obj.ele.tag,
      element: this_obj.ele.element,
    },
    options,
    states: this_obj.ele.states,
    template: template,
    parent: null,
    children: [...children],
  };
}

export default componentGenerator;
