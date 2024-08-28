import { ComponentObjType } from "../../interfaces/component";

// The function to set the setEvent & removeEvent functions

function setComponentSetEvent(this_obj: ComponentObjType<any>) {
  // setting the setEvent function to the this_obj
  this_obj.setEvent = (name, fun) => {
    // setting the function to the element
    this_obj.ele.element![
      name.toLocaleLowerCase() as keyof typeof this_obj.ele.element
    ] = fun as never;
  };
  // setting the removeEvent function to the this_obj
  this_obj.removeEvent = (name) => {
    // setting null value to the event in element to remove the event from the element
    this_obj.ele.element![
      name.toLocaleLowerCase() as keyof typeof this_obj.ele.element
    ] = null as never;
  };
}

export { setComponentSetEvent };
