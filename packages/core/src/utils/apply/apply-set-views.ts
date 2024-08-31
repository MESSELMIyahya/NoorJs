import { ComponentObjType } from "../../interfaces/component";

// Function to add the setView & setTextView methods to the this_obj

function setComponentSetViews(this_obj: ComponentObjType<any>) {
  // setView is method to set the innerHTMl of the element
  this_obj.setView = (view) => {
    // setting the innerHTML
    this_obj.ele.element!.innerHTML = view;
  };

  // setTextView is method to set the innerText of the element
  this_obj.setTextView = (view) => {
    // setting the innerHTML
    this_obj.ele.element!.innerText = view;
  };
}

export { setComponentSetViews };
