import {
  ComponentChildrenType,
  ComponentObjRenderType,
} from "../../interfaces/component";
import { templateRenderer } from "../template/template";
import { componentLifecycleMount } from "./componentLifecycle";

// The functions to render and rerender the element

// render the component by using the parent element
function renderComponent(
  component: ComponentChildrenType,
  parent: HTMLElement
) {
  const element = component.ele.element;
  element!.innerHTML = component.html;
  // render the component (appending the element to the parent element)
  parent.appendChild(element as HTMLElement);

  // render the render the children if it has
  component.children?.forEach((child) => {
    renderComponent(child, element as HTMLElement);
  });

  // run the mount lifecycle methods if this is a component
  if ((component as ComponentObjRenderType).ele.cycle) {
    componentLifecycleMount(
      (component as ComponentObjRenderType).ele.cycle.mount
    );
  }
}

// rerender the component by the id

function rerenderComponent(component: ComponentChildrenType) {
  // template and options
  // let options = component.options;
  let template = component.html;
  // generate the template
  // const rendered_template = templateRenderer(template, options);
  // access the component
  const element = component.ele.element;
  //  resetting the innerHTML to the rendered template
  element!.innerHTML = template;

  // render the render the children if it has
  component.children?.forEach((child) => {
    renderComponent(child, element as HTMLElement);
  });

  // run the mount lifecycle methods if this is a component
  if ((component as ComponentObjRenderType).ele.cycle) {
    componentLifecycleMount(
      (component as ComponentObjRenderType).ele.cycle.render
    );
  }
}

export { renderComponent, rerenderComponent };
