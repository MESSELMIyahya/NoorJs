import { rerenderComponent } from "../../../component/render/render-component";
import {
  ComponentObjType,
  ComponentObjRenderType,
  ComponentChildrenType,
} from "../../../interfaces/component";

// The function to set the render function

function setComponentRender(this_obj: ComponentObjType<any>) {
  // setting the rerender function
  this_obj.render = (): boolean => {
    // new render object
    console.log(this_obj);

    const renderObj: ComponentObjRenderType = {
      ele: {
        cycle: this_obj.ele.cycle,
        id: this_obj.ele.id,
        tag: this_obj.ele.tag,
        element: this_obj.ele.element,
      },
      states: this_obj.ele.states,
      parent: null,
      children: Array.isArray(this_obj.ele.getChildren())
        ? [...(this_obj.ele.getChildren() as ComponentChildrenType[])]
        : ([this_obj.ele.getChildren()] as ComponentChildrenType[]),
    };
    // rerender the component
    rerenderComponent(renderObj);
    return true;
  };
}

export default setComponentRender;
