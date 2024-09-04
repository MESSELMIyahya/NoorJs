import {
  ComponentChildrenType,
  ComponentFunReturnedType,
} from "../../../interfaces/component";
import NJFError from "../../../utils/error";

// This function handles the returned value of the component

interface ReturnedType {
  options: Record<string, null>;
  template: string;
  children: ComponentChildrenType[];
  getter: () => ComponentChildrenType[];
}

function componentReturnedHandler(
  retFun: ComponentFunReturnedType
): ReturnedType {
  // getting the output the view
  const ret = retFun();

  // checking the options/vars
  if (!ret) {
    throw new NJFError(
      "Component should return String/JSX or Array of JSX",
      "NotFound"
    );
  }
  // check the ret type
  // JSX (array of JSX)
  if (typeof ret !== "string" && Array.isArray(ret)) {
    return {
      getter: () => retFun() as ComponentChildrenType[],
      children: [...ret],
      options: {},
      template: "",
    };
  }
  // JSX
  else if (typeof ret !== "string") {
    return {
      getter: () => [retFun()] as ComponentChildrenType[],
      children: [ret],
      options: {},
      template: "",
    };
  }
  // String
  else {
    return {
      getter: () => [],
      children: [],
      options: {},
      template: ret,
    };
  }
}

export default componentReturnedHandler;
