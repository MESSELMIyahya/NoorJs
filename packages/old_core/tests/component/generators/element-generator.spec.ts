import { describe, expect, it } from "vitest";
import elementGenerator from "../../../src/component/generators/element-generator";

// elementGenerator function tests

describe("ElementGenerator tests", () => {
  // elementGenerator is a function
  it("ElementGenerator Is A Function", () => {
    expect(elementGenerator).toBeTypeOf("function");
  });

  const tag = "input";
  const ele = window.document.createElement("input") as HTMLInputElement;

  // sets the props
  it("Sets Props To The element", () => {
    const props = {
      className: "p-2",
      disabled: true,
      placeholder: "Name",
      // more-complex props
      style: {
        color: "red",
        padding: "4px 6px",
        backgroundColor: "white",
      },
    };

    // run the function
    elementGenerator(tag, ele, props);

    // setts normal props
    expect(
      ele.className == props.className &&
        ele.disabled == props.disabled &&
        ele.placeholder == props.placeholder
    ).toBe(true);

    // sets complex props
    expect(
      ele.style.color == props.style.color &&
        ele.style.padding == props.style.padding &&
        ele.style.backgroundColor == props.style.backgroundColor
    ).toBe(true);
  });

  // sets the props
  it("Sets Methods & Events To The Element", () => {
    const methods = {
      onMouseover: (e) => {},
      onInput: (e) => {},
    };

    // run the function
    elementGenerator(tag, ele, methods);

    // setts events methods
    expect(
      ele.onmouseover == methods.onMouseover && ele.oninput == methods.onInput
    ).toBe(true);
  });
});
