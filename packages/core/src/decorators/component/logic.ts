import { NoorErrorsMessagesList } from "@noorjs/shared/enums";
import { _NoorClassComponentContextType } from "@noorjs/types";
import { NoorError } from "@noorjs/shared/global";
import { COMPONENT_DECORATOR_FUNCTION_TYPE } from "./types";
import { NoorSymbolsList } from "@noorjs/shared/symbols";
import GenerateId from "../../utilities/generate-id";
//  __The @Component Decorator Logic__

// decorator function logic
const $_Component_Decorator: COMPONENT_DECORATOR_FUNCTION_TYPE = () => {
  return function (constructor) {
    // prepare thee component constructor properties
    const component_constructor = constructor.prototype;

    // (CHECK) if the 'paint' isn't declared
    if (component_constructor.paint === undefined) {
      throw new NoorError(
        NoorErrorsMessagesList.PAIN_METHOD_NOT_FOUND,
        "NotFound"
      );
    }
    // setting the context for this component
    const _context: _NoorClassComponentContextType = {
      $_id: GenerateId("component"),
      $$typeof: NoorSymbolsList.CLASS_COMPONENT_ELEMENT_SYMBOL,
    };

    // setting the context inside the constructor prototype
    constructor.prototype._$ctx = _context;
  };
};

// Export the decorator
export default $_Component_Decorator;
