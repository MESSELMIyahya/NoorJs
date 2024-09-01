import {
  ComponentObjRenderType,
  ComponentObjType,
} from "../../interfaces/component";
import { rerenderComponent } from "../component/renderComponent";

// The function to set the render function

function setComponentRender(this_obj: ComponentObjType<any>) {
  // setting the rerender function
  this_obj.render = (): boolean => {
    // new render object
    const renderObj: ComponentObjRenderType = {
      ele: {
        cycle: this_obj.ele.cycle,
        id: this_obj.ele.id,
        tag: this_obj.ele.tag,
        element: this_obj.ele.element,
      },
      html: this_obj.ele.template,
      options: { ...this_obj.ele.options },
      states: this_obj.ele.states,
      parent: null,
      children: [...this_obj.ele.getChildren()],
      template: this_obj.ele.template,
    };
    // rerender the component
    rerenderComponent(renderObj);
    return true;
  };
}

export { setComponentRender };
