import { ComponentObjType } from "../../../interfaces/component";

// Function to add the lifecycle events methods to the this_obj

function setComponentLifecycleMethods(this_obj: ComponentObjType<any>) {
  // method to set function that runs on the initialize
  this_obj.onInit = (fun) => {
    // adding the function to init array
    this_obj.ele.cycle.init.push(fun);
  };

  // method to set function that runs one time after the first rendered
  this_obj.onMount = (fun) => {
    // adding the function to mount array
    this_obj.ele.cycle.mount.push(fun);
  };

  // method to set function that runs every render
  this_obj.onRender = (fun) => {
    // adding the function to render array
    this_obj.ele.cycle.render.push(fun);
  };
}

export default setComponentLifecycleMethods;
