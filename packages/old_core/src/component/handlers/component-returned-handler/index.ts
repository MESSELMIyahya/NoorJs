import {
  ComponentChildrenType,
  ComponentFunReturnedType,
  ComponentObjType,
} from "../../../interfaces/component";
import NJFError from "../../../utils/error";

// This function handles the returned value of the component

interface ReturnedType {
  children: ComponentChildrenType[];
  getter: () => ReturnType<ComponentObjType<any>["ele"]["getChildren"]>;
}

function componentReturnedHandler(
  retFun: ComponentFunReturnedType
): ReturnedType {
  // getting the output the view
  const ret = retFun();

  // checking the options/vars
  if (ret === undefined) {
    throw new NJFError(
      "Component should return String/JSX or Array of JSX",
      "NotFound"
    );
  }
  // check the ret type
  // JSX (array of JSX)
  if (Array.isArray(ret)) {
    return {
      getter: () => retFun() as ComponentChildrenType[],
      children: [...ret],
    };
  }
  // JSX
  else if (typeof ret !== "string" && typeof ret !== "number" && ret !== null) {
    return {
      getter: () => [retFun()] as ComponentChildrenType[],
      children: [ret],
    };
  }
  // Null
  else if (ret === null) {
    return {
      getter: () => [retFun()] as ComponentChildrenType[],
      children: [ret],
    };
  }
  // Number
  else if (typeof ret === "number") {
    return {
      getter: () => [retFun()?.toString() || null],
      children: [(ret as number).toString()],
    };
  }
  // String
  else {
    return {
      getter: () => [retFun() as string],
      children: [ret.toString()],
    };
  }
}

export default componentReturnedHandler;
