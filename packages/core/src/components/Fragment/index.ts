// __The NoorJs Fragment Component Logic__

import { _NoorNodeType } from "@noorjs/types";
import { $_Component_Decorator } from "../../decorators/component";

// This Fragment uses the Component decorator ($_Component_Decorator) to be initialized as a normale component

@$_Component_Decorator()
class NoorFragment {
  props?: { children: _NoorNodeType };
  // paint
  paint() {
    return this?.props?.children || null;
  }
}

// exporting the component
export { NoorFragment };
