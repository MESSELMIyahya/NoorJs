import { renderComponent } from "../component/render/render-component";
import { ComponentChildrenType } from "../interfaces/component";
import { CreatedRootElement } from "./createRoot";

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

export default renderRoot;
