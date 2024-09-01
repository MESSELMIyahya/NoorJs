import {
  ComponentChildrenType,
  ComponentFunType,
  ComponentObjRenderType,
} from "../../interfaces/component";
import { componentGenerator } from "../component/componentGenerator";
import { renderComponent } from "../component/renderComponent";
import { CreatedRootElement } from "../root/createRoot";

// The renderRoot function

function renderRoot(
  root: CreatedRootElement,
  rootComponents: ComponentChildrenType[]
) {
  rootComponents.forEach((ele) => {
    console.log('my root children :',ele.children);
    // render the element
    renderComponent(ele, root.element);
  });
}

export { renderRoot };
