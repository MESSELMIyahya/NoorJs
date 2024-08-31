import { ComponentObjType } from "../../interfaces/component";

// Function to add the onChange method to the this_obj

function setComponentStateOnChange(this_obj: ComponentObjType<any>) {
  // onChange is method save all the function that run when state(s) gets updated
  this_obj.onChange = (fun, refKeys) => {
    // add the function to the props's changes functions
    refKeys.forEach((e) => {
      // set the function to prop changes
      this_obj.ele.states_changes[e] = {
        changes: [...(this_obj.ele.states_changes[e]?.changes || []), fun],
      };
    });
  };
}

export { setComponentStateOnChange };
