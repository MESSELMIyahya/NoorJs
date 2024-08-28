import {
  ComponentFunType,
  ComponentObjRenderType,
} from "../../interfaces/component";
import { componentGenerator } from "../component/componentGenerator";
import { renderComponent } from "../component/renderComponent";
import { CreatedRootElement } from "../root/createRoot";

// The renderRoot function

function renderRoot(
  root: CreatedRootElement,
  rootComponent: ComponentFunType[]
) {
  const list: ComponentObjRenderType[] = [];
  rootComponent.forEach((component) => {
    const element = componentGenerator(component);
    list.push(element);
  });
  list.forEach((ele) => {
    // render the element
    renderComponent(ele, root.element);
  });
}

export { renderRoot };
