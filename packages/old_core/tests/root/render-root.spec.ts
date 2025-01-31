import { describe, expect, it } from "vitest";
import renderRoot from "../../src/root/renderRoot";

// RenderRoot function tests

describe("RenderRoot function Tests", () => {
  it("RenderRoot Is A Function", () => {
    expect(renderRoot).toBeTypeOf("function");
  });
});
