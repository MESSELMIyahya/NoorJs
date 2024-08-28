import { ComponentObjType } from "../../interfaces/component";

// component state method

function applyState<T>(
  initialValue: T,
  this_obj: ComponentObjType<any> | any
): T {
  // setting the state/variable
  const length = this_obj.states?.length || 0;
  this_obj.states[length] = initialValue;

  return this_obj.states[length];
}

export { applyState };
