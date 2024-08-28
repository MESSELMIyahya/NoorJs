import { ComponentObjType } from "../../interfaces/component";

// The function to set & get the elements attributes

function setComponentSetAttribute(this_obj: ComponentObjType<any>) {
  // setting the function to set attributes
  this_obj.set = (name, value) => {
    // setting the value to the attribute in the element
    this_obj.ele.element![name as keyof typeof this_obj.ele.element] =
      value as never;
    // return the value
    return value;
  };

  // setting the function to get the attributes
  this_obj.get = (name) => {
    // getting and returning the value of the attribute from the element
    return this_obj.ele.element![name as keyof typeof this_obj.ele.element];
  };
}

export { setComponentSetAttribute };
