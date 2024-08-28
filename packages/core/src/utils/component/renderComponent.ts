import { ComponentObjRenderType } from "../../interfaces/component";
import { templateRenderer } from "../template/template";
import { componentReturnedHandler } from "./componentReturnedHandler";

// The functions to render and rerender the element

// render the component by using the parent element
function renderComponent(
  component: ComponentObjRenderType,
  parent: HTMLElement
) {
  const element = component.ele.element;
  element!.innerHTML = component.html;
  // render the component (appending the element to the parent element)
  parent.appendChild(element as HTMLElement);
}

// rerender the component by the id

function rerenderComponent(component: ComponentObjRenderType) {
  // template and options
  let options = component.options;
  let template = component.template;
  // generate the template
  const rendered_template = templateRenderer(template, options);
  // access the component
  const element = component.ele.element;
  //  resetting the innerHTML to the rendered template
  element!.innerHTML = rendered_template;
}

export { renderComponent, rerenderComponent };
