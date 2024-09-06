import { describe, expect, it } from "vitest";
import { ComponentFunReturnedType } from "../../../src/interfaces/component";
import ComponentCreator from "../../../src/component/creators/component-creator";
import componentReturnedHandler from "../../../src/component/handlers/component-returned-handler";

// componentReturnedHandler function tests

describe("ComponentReturnedHandler Tests", () => {
  // componentReturnedHandler is a function
  it("ComponentReturnedHandler Is A Function ", () => {
    expect(componentReturnedHandler).toBeTypeOf("function");
  });

  // It returns the getter & children
  it("Sets & Returns Getter & Children", () => {
    // Test component return function
    const retFun: ComponentFunReturnedType = () => [
      ComponentCreator("div", null, null),
      ComponentCreator("p", null, null),
    ];

    // call the function
    const { children, getter } = componentReturnedHandler(retFun);

    // sets and returns the children
    expect(children![0].ele.tag == "div" && children![1].ele.tag == "p").toBe(
      true
    );

    // sets and returns the getter method
    expect(getter()[0].ele.tag == "div" && getter()[1].ele.tag == "p").toBe(
      true
    );
  });

  // It handles all Children types "string" | "JSX (ComponentCreator)" | "JSX[]"
  it("Handles All Children Types", () => {
    // Test component return functions for each children type
    // String
    const retFunString: ComponentFunReturnedType = () => "Hello";
    // Array of Strings => ** NOT READY YET **
    // const retFunArrayString: ComponentFunReturnedType = () => ["Hello","World"];
    // JSX (ComponentCreator)

    const retFunJSX: ComponentFunReturnedType = () =>
      ComponentCreator("div", null, null);
    // Array of JSX
    const retFunArrayJSX: ComponentFunReturnedType = () => [
      ComponentCreator("div", null, null),
      ComponentCreator("p", null, null),
    ];

    // Returns string child
    expect(componentReturnedHandler(retFunString).template).toBe("Hello");

    // Returns JSX child and getter method
    expect(
      componentReturnedHandler(retFunJSX).children![0].ele.tag == "div" &&
        componentReturnedHandler(retFunJSX).getter()[0].ele.tag == "div"
    ).toBe(true);

    // Returns JSX children
    expect(
      componentReturnedHandler(retFunArrayJSX).children![0].ele.tag == "div" &&
        componentReturnedHandler(retFunArrayJSX).getter()![0].ele.tag ==
          "div" &&
        componentReturnedHandler(retFunArrayJSX).children![1].ele.tag == "p" &&
        componentReturnedHandler(retFunArrayJSX).getter()![1].ele.tag == "p"
    ).toBe(true);
  });
});
