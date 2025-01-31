import { NoorErrorsMessagesList } from "../../enums/errors.list";
import NoorError from "../../utilities/error";
import { COMPONENT_DECORATOR_FUNCTION_TYPE } from "./types";
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
  };
};

// Export the decorator
export default $_Component_Decorator;
