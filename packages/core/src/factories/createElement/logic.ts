import { NoorErrorsMessagesList } from "../../enums/errors.list";
import { NoorSymbolsList } from "../../global/symbols.list";
import { _NoorComponentType } from "../../interfaces/component";
import _NoorClassComponentContextType from "../../interfaces/component-context";
import { CheckIfComponentIsValid } from "../../utilities/checkers/check-in-component-is-valid";
import NoorError from "../../utilities/error";
import { _NoorCreateElementType } from "./type";

// __The createElement function logic

export const createElement: _NoorCreateElementType = (
  type,
  props,
  ...children
) => {
  // check if this's a component or element
  const _is = typeof type == "string" ? "element" : "component";

  // if the element is a component
  if (_is === "component") {
    // Check if the component is valid
    if (!CheckIfComponentIsValid(type as _NoorComponentType)) {
      // throw Error
      throw new NoorError(
        NoorErrorsMessagesList.COMPONENT_NOT_VALID,
        "NotValid"
      );
    }
    // return the element object
    return {
      type: type,
      $$typeof: NoorSymbolsList.CLASS_COMPONENT_ELEMENT_SYMBOL,
      key: null,
      props: { ...props, children: children },
    };
  } else {
    // the element is a tag (e.g html element)
    return {
      type: type,
      $$typeof: NoorSymbolsList.ELEMENT_SYMBOL,
      key: null,
      props: { ...props, children: children },
    };
  }
};
