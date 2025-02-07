import { NoorSymbolsList } from "../../global/symbols.list";
import { _NoorComponentType } from "../../interfaces/component";

// check if component is valid (it checks if this class component was initialized by the @Component decorator and has a $$typeof symbol for security to avoid component inject in runtime env)
export function CheckIfComponentIsValid(compo: _NoorComponentType) {
  // if the ctx doesn't exist
  if (!compo.prototype?._$ctx) return false;
  // check the validation of it
  return (
    typeof compo.prototype._$ctx.$$typeof == "symbol" &&
    compo.prototype._$ctx.$$typeof ==
      NoorSymbolsList.CLASS_COMPONENT_ELEMENT_SYMBOL
  );
}
