import { nanoid } from "nanoid";
import { ComponentObjType } from "../../../interfaces/component";
import {
  ComponentStateMethodType,
  ComponentStateMethodGetterType,
  ComponentStateMethodSetterType,
} from "../../../interfaces/state";

// Function to set the state method

function setComponentState(this_obj: ComponentObjType<any>) {
  // function to generate id name for the state
  function generateStateName() {
    return "state_" + nanoid(5);
  }
  // setting the method
  const state_method: ComponentStateMethodType = <T>(initialValue: T) => {
    // generate new id(name) for the new state
    const name = generateStateName();
    const states = this_obj.ele.states;
    // setting the value to the property(state)
    states[name] = initialValue;

    // getter function to get new new value of the property
    const getter: ComponentStateMethodGetterType<T> = () => {
      return states[name];
    };

    // setter function to set new values to the state
    const setter: ComponentStateMethodSetterType<T> = (value) => {
      const oldValue = states[name];

      // set the new value to the prop
      if (value instanceof Function) {
        states[name] = value(states[name]);
      } else {
        states[name] = value;
      }

      // run the onchange function of this property
      const change_obj = this_obj.ele?.states_changes[name] || undefined;
      if (change_obj && states[name] != oldValue) {
        // if change_obj exists
        // run the methods
        change_obj.changes.forEach((fun) => fun());
      }

      // return the value
      return states[name];
    };

    return [getter, setter, name]; // => return getter,setter and ref
  };

  // assigning the state_method to the this_obj state
  this_obj.state = state_method;
}

export default setComponentState;
