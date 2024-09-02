import { ComponentChildrenType } from "../../interfaces/component";
import { renderComponent } from "../component/renderComponent";
import { CreatedRootElement } from "../root/createRoot";

// The renderRoot function

function renderRoot(
  root: CreatedRootElement,
  rootComponents: ComponentChildrenType[]
) {
  rootComponents.forEach((ele) => {
    // render the first elements (root)
    renderComponent(ele, root.element);
  });
}

export { renderRoot };
