import {
  ComponentChildrenType,
  ComponentObjRenderType,
} from "../../../interfaces/component";
import { ElementObjRenderType } from "../../../interfaces/element";
import { componentLifecycleMount } from "../../lifecycle/component-lifecycle";

// The functions to render and rerender the element

// render the component by using the parent element
function renderComponent(
  component: ComponentChildrenType,
  parent: HTMLElement
) {
  // check if the component is string or number
  if (typeof component === "string" || typeof component === "number") {
    // if the child is a string we append it to the parent
    parent.append(component.toString());
  } else if (component === null) {
    // if the child is a null we do nothing
  } else {
    // accessing the component element
    const element = component.ele.element;

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
}

// rerender the component by the id

function rerenderComponent(component: ComponentObjRenderType) {
  // access the component
  const element = component.ele.element;
  // setting the html to empty string to rerender the component
  element!.innerHTML = "";

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
