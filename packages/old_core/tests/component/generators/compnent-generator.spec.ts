import { describe, expect, it } from "vitest";
import componentGenerator from "../../../src/component/generators/component-generator";
import {
  ComponentFunReturnedType,
  ComponentObjRenderType,
  ComponentObjType,
} from "../../../src/interfaces/component";
import ComponentCreator from "../../../src/component/creators/component-creator";
import elementPlug from "../../../src/plugs/element";

// ComponentGenerator function tests

describe("ComponentGenerator Tests", () => {
  // simple component
  function simpleComponent(
    this: ComponentObjType<any>
  ): ComponentFunReturnedType {
    elementPlug("main", this);
    return () => [
      ComponentCreator("div", { id: "divy" }, "mydiv"),
      ComponentCreator(
        "form",
        null,
        ComponentCreator("input", { placeholder: "Email" }),
        ComponentCreator("input", { placeholder: "Password" })
      ),
    ];
  }

  // ComponentGenerator is a function
  it("ComponentGenerator Is A Function & ", () => {
    expect(componentGenerator).toBeTypeOf("function");
  });

  // It Calls the component and bind the this_obj
  it("Calls The Component & Binds The this_obj To It", () => {
    // call the component
    expect(
      componentGenerator(simpleComponent, {}).ele.tag == "main" &&
        componentGenerator(simpleComponent, {}).children![0] &&
      (componentGenerator(simpleComponent, {}).children![0] as ComponentObjRenderType).children![0] == "mydiv"
    ).toBe(true);
  });

  // It returns the render object
  it("Sets The Children", () => {
    // check if hte it sets the children and their props
    // form element children
    expect(
      ((componentGenerator(simpleComponent, {}).children![1] as ComponentObjRenderType).children![0] as ComponentObjRenderType).ele
        .tag == "input" &&
        (
          ((componentGenerator(simpleComponent, {}).children![1] as ComponentObjRenderType).children![0] as ComponentObjRenderType).ele
            .element as HTMLInputElement
        ).placeholder == "Email" &&
        ((componentGenerator(simpleComponent, {}).children![1] as ComponentObjRenderType).children![1] as ComponentObjRenderType).ele
          .tag == "input" &&
        (
          ((componentGenerator(simpleComponent, {}).children![1] as ComponentObjRenderType).children![1] as ComponentObjRenderType).ele
            .element as HTMLInputElement
        ).placeholder == "Password"
    ).toBe(true);
  });

  // It calls the lifecycle onInit method
  it("Calls The Lifecycle OnInit Method", () => {
    // testing that it calls the onInit lifecycle method (using the state)
    function lifecycleTestComponent(
      this: ComponentObjType<any>
    ): ComponentFunReturnedType {
      elementPlug("div", this);
      // setting a boolean state to be change
      const [_, setCalled] = this.state(false);
      //   add onInit lifecycle method that will be triggered once the component gets initialized
      this.onInit(() => {
        // set the state to 'true' when the onInit gets called
        setCalled(true);
      });
      // return blank string
      return () => "-";
    }

    // test if the components's state has been changed (so the onInit was called)
    // TIP (we don't know the name(ref) of the state so we'll get all the values of the states object and see if it contains 'true' value)
    expect(
      componentGenerator(lifecycleTestComponent).states
        ? Object.values(
            componentGenerator(lifecycleTestComponent).states
          ).includes(true)
        : false
    ).toBe(true);
  });
});
