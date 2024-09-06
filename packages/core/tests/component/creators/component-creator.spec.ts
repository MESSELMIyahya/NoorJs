import { describe, expect, it } from "vitest";
import ComponentCreator from "../../../src/component/creators/component-creator";
import {
  ComponentFunReturnedType,
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
    expect(ComponentCreator(Tag, props, null).ele.tag).toBe(Tag);
    // element
    expect(ComponentCreator(Tag, props, null).ele.element).toBeTruthy();
    // className prop
    expect(ComponentCreator(Tag, props, null).ele.element?.className).toBe(
      props.className
    );
    // onClick method
    expect(ComponentCreator(Tag, props, null).ele.element?.onclick).toBeTypeOf(
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
    );

    // it sets the first child with its props
    expect(
      compo?.children &&
        compo.children[0].ele.tag == "div" &&
        compo?.children[0].ele.element?.className == "pb-2"
    ).toBe(true);

    // it sets the first child's child & parent with its props
    expect(
      compo?.children &&
        compo.children[0].children &&
        compo.children[0].children[0].parent?.ele.tag == "div" &&
        compo.children[0].children[0].ele.tag == "label" &&
        compo.children[0].children[0].ele.element?.id == "label"
    ).toBe(true);

    // it sets the second child with its props
    expect(
      compo?.children &&
        compo.children[1]?.ele.tag == "input" &&
        (compo.children[1]?.ele.element as HTMLInputElement)?.disabled == true
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
        ComponentCreator(simpleComponent, null).children![0].ele.tag == "div" &&
        ComponentCreator(simpleComponent, null).children![0].ele.element?.id ==
          "divy" &&
        ComponentCreator(simpleComponent, null).children![0]?.html ==
          "Hello World"
    ).toBe(true);
    // it sets the second child with its sub-children and their pros
    expect(
      ComponentCreator(simpleComponent, null)?.children &&
        ComponentCreator(simpleComponent, null).children![1] &&
        ComponentCreator(simpleComponent, null).children![1]?.ele.tag ==
          "form" &&
        ComponentCreator(simpleComponent, null).children![1].children![0].parent
          ?.ele.tag == "form" &&
        ComponentCreator(simpleComponent, null).children![1].children![0].ele
          .tag == "input" &&
        (
          ComponentCreator(simpleComponent, null).children![1].children![0].ele
            .element as HTMLInputElement
        )?.placeholder == "Email" &&
        ComponentCreator(simpleComponent, null).children![1].children![1].ele
          .tag == "input" &&
        (
          ComponentCreator(simpleComponent, null).children![1].children![1].ele
            .element as HTMLInputElement
        )?.placeholder == "Password"
    ).toBe(true);
  });

  // It Handles Arrays & Strings & Numbers & Null as children
  it("It Handles (Arrays & Strings & Numbers & Null) As Children", () => {
    // It handle string/strings as children
    expect(ComponentCreator("div", null, "Hello").html).toBe("Hello");
    expect(ComponentCreator("div", null, "Hello", " World").html).toBe(
      "Hello World"
    );

    // It handles number/numbers as children
    expect(ComponentCreator("div", null, 1446).html).toBe("1446");
    expect(ComponentCreator("div", null, 1446, 3, 2).html).toBe("144632");

    // It handles null as children
    expect(ComponentCreator("div", null, null).html).toBe("");

    // It handles array/arrays ** NOT READY YET **
    // expect(ComponentCreator("div", null,['hello',1,3]).html).toBe("hello13");
    // expect(ComponentCreator("div", null,['why',3],['f3',5]).html).toBe("why3f35");
  });
});
