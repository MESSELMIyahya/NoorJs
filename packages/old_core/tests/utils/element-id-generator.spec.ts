import { describe, expect, it } from "vitest";
import elementIdGenerator from "../../src/utils/element-id-generator";

// elementIdGenerator function tests

describe("ElementIdGenerator Tests", () => {
  it("It Is A Function And Returns String", () => {
    // it is a function
    expect(elementIdGenerator).toBeTypeOf("function");
    // it is returns a string
    expect(elementIdGenerator()).toBeTypeOf("string");
    // it returns id that starts with 'ele_'
    expect(elementIdGenerator()).toContain("ele_");
  });
});
