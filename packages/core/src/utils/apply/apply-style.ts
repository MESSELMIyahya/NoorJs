import { ComponentObjType } from "../../interfaces/component";

// Function to add the style method to the this_obj

function setComponentStyle(this_obj: ComponentObjType<any>) {
  // setting the function to style

  // method to set one style to prop
  this_obj.style = (prop, value) => {
    // setting the value (style) to the prop in the element style
    this_obj.ele.element!.style[prop as never] = value;
  };

  // method to set many styles to all props
  this_obj.styles = (props) => {
    // generating an array of the props keys
    const stylesKeys = Object.keys(props || []);
    // looping on the keys
    stylesKeys.forEach((key) => {
      // setting the style to prop;
      this_obj.ele.element!.style[key as never] = props[
        key as keyof CSSStyleDeclaration
      ] as string;
    });
  };
}

export { setComponentStyle };
