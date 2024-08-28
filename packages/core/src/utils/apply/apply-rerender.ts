import {
  ComponentObjRenderType,
  ComponentObjType,
} from "../../interfaces/component";
import { rerenderComponent } from "../component/renderComponent";

// The function to set the render function

function setComponentRender(this_obj: ComponentObjType<any>) {
  // setting the rerender function
  this_obj.render = (options, template): boolean => {
    // new render object
    const renderObj: ComponentObjRenderType = {
      ele: {
        id: this_obj.ele.id,
        tag: this_obj.ele.tag,
        element: this_obj.ele.element,
      },
      html: "",
      options: { ...this_obj.ele.options, ...options },
      states: this_obj.states,
      parent: null,
      children: [],
      template:
        template && template != this_obj.ele.template
          ? template
          : this_obj.ele.template,
    };
    // rerender the component
    rerenderComponent(renderObj);
    return true;
  };
}

export { setComponentRender };
