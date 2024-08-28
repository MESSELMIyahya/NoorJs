import { ComponentFunReturnedType } from "../../interfaces/component";
import NJFError from "../error/createError";

// This function handles the returned value of the component

interface ReturnedType {
  options: Record<string, null>;
  template: string;
}

function componentReturnedHandler(ret: ComponentFunReturnedType): ReturnedType {
  // checking the options/vars
  if (!ret) {
    throw new NJFError(
      "Component should return 'string' or array of options with string",
      "NotFound"
    );
  }
  if (typeof ret !== "string" && typeof ret[1] == "string") {
    return {
      options: ret[0],
      template: ret[1],
    };
  } else if (typeof ret === "string") {
    return { options: {}, template: ret };
  } else {
    throw new NJFError(
      "Component should return 'string' or array of options with string",
      "NotFound"
    );
  }
}

export { componentReturnedHandler };
