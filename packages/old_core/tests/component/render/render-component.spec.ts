import { describe, expect, it } from "vitest";
import * as renderComponentMethods from "../../../src/component/render/render-component";
import ComponentCreator from "../../../src/component/creators/component-creator";
import {
  ComponentFunReturnedType,
  ComponentObjRenderType,
  ComponentObjType,
} from "../../../src/interfaces/component";
import elementPlug from "../../../src/plugs/element";

// Render Component Methods tests

describe("Render Component Methods Tests", () => {
  // The Render Methods are functions
  it("Render Component Methods Are Functions", () => {
    // renderComponent
    expect(renderComponentMethods.renderComponent).toBeTypeOf("function");
    // rerenderComponent
    expect(renderComponentMethods.rerenderComponent).toBeTypeOf("function");
  });

  //  It renders the component inside its parent and its children inside it
  it("Renders The Component Inside Its Parent And With Its Children", () => {
    // var to test the mount method
    let mounted = false;
    // simple test component
    function simpleComponent(
      this: ComponentObjType<any>
    ): ComponentFunReturnedType {
      elementPlug("main", this);
      // setting the onMount method
      this.onMount(() => {
        // set the mounted var to true
        mounted = true;
      });
      return () => [
        ComponentCreator("h3", null, null),
        ComponentCreator("p", null, null),
      ];
    }

    // test component
    const parent = document.body;
    const renderObj = ComponentCreator(simpleComponent, null);

    
    // call the function to render the component
    renderComponentMethods.renderComponent(renderObj, parent);

    // Test it was rendered inside its parent
    expect(parent.contains(renderObj.ele.element!)).toBe(true);

    // Test its children were rendered inside it
    expect(
      renderObj.ele.element!.contains(
        // child 1
        (renderObj.children![0] as ComponentObjRenderType).ele.element!
      ) &&
        renderObj.ele.element!.contains(
          // child 2
          (renderObj.children![1] as ComponentObjRenderType).ele.element!
        )
    ).toBe(true);

    // Test if the onMount method was called
    expect(mounted).toBe(true);
  });

  // It rerenders the component with its children
  it("Rerenders The Component With Its Children", () => {
    // var to test the mount rendered
    let rendered = false;
    // simple test component
    function simpleComponent(
      this: ComponentObjType<any>
    ): ComponentFunReturnedType {
      elementPlug("main", this);
      // setting the onMount method
      this.onRender(() => {
        // set the rendered var to true
        rendered = true;
      });
      return () => "Hello,World";
    }

    // test component
    const parent = document.body;
    const renderObj = ComponentCreator(simpleComponent, null);

    // call the function to render the component
    renderComponentMethods.renderComponent(renderObj, parent);

    // change some data in the component
    renderObj.children![0] = "Hello,Algeria";
    const imgRenderObj = ComponentCreator("img", { src: "" }, null);
    renderObj.children?.push(imgRenderObj);

    // rerender the component
    renderComponentMethods.rerenderComponent(
      renderObj as ComponentObjRenderType
    );

    // Test if the data was updated in the dom
    // the text
    expect(renderObj.ele.element!.innerHTML).contain("Hello,Algeria");
    // the img child
    expect(renderObj.ele.element!.contains(imgRenderObj.ele.element!)).toBe(
      true
    );

    // Test if the onRender method was called
    expect(rendered).toBe(true);
  });
});
