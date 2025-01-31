import { describe, expect, it } from "vitest";
import elementPlug from "../../src/plugs/element/index.ts";
import { ComponentObjType } from "../../src/interfaces/component.ts";

// Element Plug Tests

describe("Element Plug Tests", () => {
  // Element plug is a function
  it("Element plug is a function", () => {
    expect(typeof elementPlug).toBe("function");
  });

  // Is sets the tag and create the elements
  it("Element plug sets the tag & creates the element", () => {
    // fake component object
    const this_test_obj: ComponentObjType<any> = Object.create({
      ele: {
        id: "test2ele",
        options: {},
        tag: "div",
        cycle: { init: [], mount: [], render: [] },
        states: {},
        children: [],
        states_changes: {},
      },
      methods: {},
      get: {},
      set: {},
    });
    // call
    elementPlug("div", this_test_obj);

    // test Tag setting
    expect(this_test_obj.ele.tag == "div", "Tag is not the same");
    // test Tag setting
    expect(
      this_test_obj.ele.element && this_test_obj.ele.element?.id == "test2ele",
      "Create is not created"
    );
  });

  // Is sets the tag and create the elements
  it("Element plug appliers set the setters", () => {
    // fake component object
    const this_test_obj: ComponentObjType<any> = Object.create({
      ele: {
        id: "test3ele",
        tag: "div",
        cycle: { init: [], mount: [], render: [] },
      },
      methods: {},
      get: {},
      set: {},
    });
    // call
    elementPlug("div", this_test_obj);

    // test style & styles methods are defined
    expect(this_test_obj.style).toBeDefined();
    expect(this_test_obj.styles).toBeDefined();
    // test setView & setTextView methods are defined
    expect(this_test_obj.setView).toBeDefined();
    expect(this_test_obj.setTextView).toBeDefined();
    // test state method is defined
    expect(this_test_obj.state).toBeDefined();
    // test get & set methods are defined
    expect(this_test_obj.get).toBeDefined();
    expect(this_test_obj.set).toBeDefined();
    // test setEvent & removeEvent methods are defined
    expect(this_test_obj.setEvent).toBeDefined();
    expect(this_test_obj.removeEvent).toBeDefined();
    // test render method is defined
    expect(this_test_obj.render).toBeDefined();
    // test lifecycle methods to be defined (onInit,onMount,onRender)
    expect(this_test_obj.onInit).toBeDefined();
    expect(this_test_obj.onMount).toBeDefined();
    expect(this_test_obj.onRender).toBeDefined();
    // test onChange method to be defined
    expect(this_test_obj.onChange).toBeDefined();

    // test some dom methods to be defined
    expect(this_test_obj.methods.addEventListener).toBeDefined();
    expect(this_test_obj.methods.blur).toBeDefined();
    // expect(this_test_obj.methods.click).toBeDefined(); // => should be fixed
    expect(this_test_obj.methods.getRootNode).toBeDefined();
    expect(this_test_obj.methods.isDefaultNamespace).toBeDefined();
    expect(this_test_obj.methods.scroll).toBeDefined();
  });
});
