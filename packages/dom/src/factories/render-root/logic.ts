// __ The NoorJs render root function logic __
import { NoorError } from "@noorjs/shared/global";
import { _NoorElementType } from "@noorjs/types";
import { render } from "../render";

// the render root function logic

export function renderRoot(root: _NoorElementType, rootElement: HTMLElement) {
  // check if the room element is valid
  if (!rootElement) {
    throw new NoorError(
      "The Root Element Should Be Valid HTML Element",
      "NotValid"
    );
  }

  // clear the element inner html
  rootElement.innerHTML = "";

  // render the root
  render(root.type, root.props, rootElement);
}
