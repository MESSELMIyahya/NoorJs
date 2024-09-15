import { describe, expect, it } from "vitest";
import ComponentCreator from "../../../src/component/creators/component-creator";
import {
  ComponentFunReturnedType,
  ComponentObjRenderType,
  ComponentObjType,
} from "../../../src/interfaces/component";
import elementPlug from "../../../src/plugs/element";

// ComponentCreator function tests

describe("ComponentCreator Tests", () => {
  // It's a function and accepts 'type' 'props' 'children'
  it("It is a function", () => {
    // it is a function
    expect(ComponentCreator).toBeTypeOf("function");
  });

  // It Creates HTML Elements
  it("Creates HTML Elements With Methods,Props & Children & Parents And Nested-Children", () => {
    // test props
    const props = { onClick: () => {}, className: "text-blue-500 bg-white" };
    const Tag = "div";

    // it creates HTML element and sets the props & methods

    // tag
    expect((ComponentCreator(Tag, props, null) as ComponentObjRenderType).ele.tag).toBe(Tag);
    // element
    expect((ComponentCreator(Tag, props, null) as ComponentObjRenderType).ele.element).toBeTruthy();
    // className prop
    expect((ComponentCreator(Tag, props, null) as ComponentObjRenderType).ele.element?.className).toBe(
      props.className
    );
    // onClick method
    expect((ComponentCreator(Tag, props, null) as ComponentObjRenderType).ele.element?.onclick).toBeTypeOf(
      "function"
    );

    // it sets the children & parents and nested-children with their props

    const compo = ComponentCreator(
      Tag,
      null,
      ComponentCreator(
        "div",
        {
          className: "pb-2",
        },
        ComponentCreator("label", { id: "label" }, "UserName")
      ),
      ComponentCreator("input", { disabled: true })
    ) as ComponentObjRenderType ;

    // it sets the first child with its props
    expect(
      compo?.children &&
        (compo.children[0] as ComponentObjRenderType).ele.tag == "div" &&
        (compo.children[0] as ComponentObjRenderType).ele.element?.className == "pb-2"
    ).toBe(true);

    // it sets the first child's child & parent with its props
    expect(
      compo?.children &&
        (compo.children[0] as ComponentObjRenderType).children &&
        ((compo.children[0] as ComponentObjRenderType).children![0] as ComponentObjRenderType).parent?.ele.tag == "div" &&
        ((compo.children[0] as ComponentObjRenderType).children![0] as ComponentObjRenderType).ele.tag == "label" &&
        ((compo.children[0] as ComponentObjRenderType).children![0] as ComponentObjRenderType).ele.element?.id == "label"
    ).toBe(true);

    // it sets the second child with its props
    expect(
      compo?.children &&
      (compo.children[1] as ComponentObjRenderType)?.ele.tag == "input" &&
        ((compo.children[1] as ComponentObjRenderType)?.ele.element as HTMLInputElement)?.disabled == true
    ).toBe(true);
  });

  // It Creates Component
  it("Creates Component With & HTMl , Children & Parents And Nested-Children", () => {
    // simple component
    function simpleComponent(
      this: ComponentObjType<any>
    ): ComponentFunReturnedType {
      elementPlug("main", this);
      return () => [
        ComponentCreator("div", { id: "divy" }, "Hello World"),
        ComponentCreator(
          "form",
          null,
          ComponentCreator("input", { placeholder: "Email" }),
          ComponentCreator("input", { placeholder: "Password" })
        ),
      ];
    }
    // creates the component with and sets the tag and HTML
    // tag
    expect(ComponentCreator(simpleComponent, null).ele.tag).toBe("main");
    // element
    expect(ComponentCreator(simpleComponent, null).ele.element).toBeTruthy();
    // it sets the first child with its parent & props and HTML
    expect(
      ComponentCreator(simpleComponent, null)?.children &&
        ComponentCreator(simpleComponent, null).children![0] &&
        // ComponentCreator(simpleComponent, null).children[0].parent?.ele?.tag == "main" && => ** NOT READY YET **
        (ComponentCreator(simpleComponent, null).children![0] as ComponentObjRenderType).ele.tag == "div" &&
        (ComponentCreator(simpleComponent, null).children![0] as ComponentObjRenderType).ele.element?.id ==
          "divy" &&
        (ComponentCreator(simpleComponent, null).children![0] as ComponentObjRenderType).children![0] ==
          "Hello World"
    ).toBe(true);
    // it sets the second child with its sub-children and their pros
    expect(
      ComponentCreator(simpleComponent, null)?.children &&
        ComponentCreator(simpleComponent, null).children![1] &&
        ((ComponentCreator(simpleComponent, null).children![1] as ComponentObjRenderType))?.ele.tag ==
          "form" &&
        ((ComponentCreator(simpleComponent, null).children![1] as ComponentObjRenderType).children![0] as ComponentObjRenderType).parent
          ?.ele.tag == "form" &&
        ((ComponentCreator(simpleComponent, null).children![1] as ComponentObjRenderType).children![0] as ComponentObjRenderType).ele
          .tag == "input" &&
        (
          ((ComponentCreator(simpleComponent, null).children![1] as ComponentObjRenderType).children![0] as ComponentObjRenderType).ele
            .element as HTMLInputElement
        )?.placeholder == "Email" &&
        (((ComponentCreator(simpleComponent, null) as ComponentObjRenderType).children![1] as ComponentObjRenderType).children![1] as ComponentObjRenderType).ele
          .tag == "input" &&
        (
          (((ComponentCreator(simpleComponent, null) as ComponentObjRenderType).children![1] as ComponentObjRenderType).children![1] as ComponentObjRenderType).ele
            .element as HTMLInputElement
        )?.placeholder == "Password"
    ).toBe(true);
  });

  // It Handles Arrays & Strings & Numbers & Null as children
  it("It Handles (Arrays & Strings & Numbers & Null) As Children", () => {
    // It handle string/strings as children
    expect(ComponentCreator("div", null, "Hello").children![0]).toBe("Hello");
    expect(ComponentCreator("div", null, "Hello", "World").children![1]).toBe(
      "World"
    );

    // It handles number/numbers as children
    expect(ComponentCreator("div", null, 1446).children![0]).toBe("1446");
    expect(ComponentCreator("div", null, 1446, 3, 2).children![2]).toBe("2");

    // It handles null as children
    expect(ComponentCreator("div", null, null).children![0]).toBeUndefined();

    // It handles nested array/arrays
    expect(ComponentCreator("div", null, ["hello", 1, 3]).children![0]).toBe("hello");
    expect(ComponentCreator("div", null, ["why", 3], ["f3", 5]).children![2]).toBe(
      "f3"
    );
    expect(
      ComponentCreator(
        "div",
        null,
        ["hello", ["how", "are", ["you", ["do", "ing", 1], 2], 3], 4],
      ).children![4] as string + 
      ComponentCreator(
        "div",
        null,
        ["A", "B", "C"].map((e) => e + "@")
      ).children![1] as string
    ).toBe("doB@");
  });
});
