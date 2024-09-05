import { describe, expect, it } from "vitest";
import { ComponentObjType } from "../../src/interfaces/component";
import setComponentStyle from "../../src/appliers/element/style-applier";
import setComponentSetViews from "../../src/appliers/element/views-setters-applier";
import setComponentState from "../../src/appliers/element/state-applier";
import setComponentSetAttribute from "../../src/appliers/element/setter-getter-attribute";
import setComponentSetEvent from "../../src/appliers/element/setEvent-removeEvent-applier";
import setComponentRender from "../../src/appliers/element/render-applier";
import setComponentLifecycleMethods from "../../src/appliers/element/lifecycle-events-applier";
import setComponentStateOnChange from "../../src/appliers/element/onChange-applier";
import setComponentDOMMethods from "../../src/appliers/element/dom-methods-applier";

// Element plug appliers tests

describe("Appliers Element Plug Tests", () => {
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

  // Testing appliers

  // style
  it("Set Component Style Applier", () => {
    // passing the object to the applier
    setComponentStyle(this_test_obj);

    // Test it's setting the style functions
    expect(this_test_obj.style).toBeDefined();
    expect(this_test_obj.styles).toBeDefined();
  });

  // view
  it("Set Component Set View Applier", () => {
    // passing the object to the applier
    setComponentSetViews(this_test_obj);

    // Test it's setting the setView & setTextView functions
    expect(this_test_obj.setTextView).toBeDefined();
    expect(this_test_obj.setView).toBeDefined();
  });

  // state
  it("Set Component State Applier", () => {
    // passing the object to the applier
    setComponentState(this_test_obj);

    // Test it's setting the state function
    expect(this_test_obj.state).toBeDefined();
  });

  // get/set (getting/setting properties)
  it("Set Component Get/Set Applier", () => {
    // passing the object to the applier
    setComponentSetAttribute(this_test_obj);

    // Test it's setting the get/set functions
    expect(this_test_obj.get).toBeDefined();
    expect(this_test_obj.set).toBeDefined();
  });

  // events
  it("Set Component Events Applier", () => {
    // passing the object to the applier
    setComponentSetEvent(this_test_obj);

    // Test it's setting the setEvent/removeEvent functions
    expect(this_test_obj.setEvent).toBeDefined();
    expect(this_test_obj.removeEvent).toBeDefined();
  });

  // render
  it("Set Component Render Applier", () => {
    // passing the object to the applier
    setComponentRender(this_test_obj);

    // Test it's setting the render function
    expect(this_test_obj.render).toBeDefined();
  });

  // lifecycle
  it("Set Component Lifecycle Methods Applier", () => {
    // passing the object to the applier
    setComponentLifecycleMethods(this_test_obj);

    // Test it's setting the onInit/onMount/onRender functions
    expect(this_test_obj.onInit).toBeDefined();
    expect(this_test_obj.onMount).toBeDefined();
    expect(this_test_obj.onRender).toBeDefined();
  });

  // state changes
  it("Set Component State OnChange Applier", () => {
    // passing the object to the applier
    setComponentStateOnChange(this_test_obj);

    // Test it's setting the onChange function
    expect(this_test_obj.onChange).toBeDefined();
  });

  // dom methods
  it("Set Component Dom methods Applier", () => {
    // passing the object to the applier
    setComponentDOMMethods(this_test_obj);

    // Test it's setting the some of the dom methods
    expect(this_test_obj.methods.addEventListener).toBeDefined();
    expect(this_test_obj.methods.blur).toBeDefined();
    // expect(this_test_obj.methods.click).toBeDefined(); // => should be fixed
    expect(this_test_obj.methods.getRootNode).toBeDefined();
    expect(this_test_obj.methods.isDefaultNamespace).toBeDefined();
    expect(this_test_obj.methods.scroll).toBeDefined();
  });
});
