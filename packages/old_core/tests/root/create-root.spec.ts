import { describe, expect, it } from "vitest";
import createRoot from "../../src/root/createRoot";

// CreateRoot function tests

describe("CreateRoot function Tests", () => {
  it("CreateRoot Is A Function And Creates The Root Element", () => {
    // test it to be a function
    expect(createRoot).toBeTypeOf("function");
    const root = createRoot();
    // test it sets the element id to 'root'
    expect(root.id).toBe("root");
    // test it creates the element
    expect(root.element).toBeDefined();
  });
});
