import { describe, expect, it } from "vitest";
import NoorError from "../../src/utils/error";

// NoorError class test

describe("NoorError Tests", () => {
  it("NoorError Instance Of Error & Sets Message And Name", () => {
    const error = new NoorError("myerror");
    // instance of error object
    expect(error).toBeInstanceOf(Error);
    // it sets the error message
    expect(error.message).toBe("myerror");
    // it sets the error name to start with 'Noor'
    expect(error.name).toContain("Noor");
  });

  it("NoorError Correct Error Names", () => {
    // it sets the name to "NotCalled"
    expect(new NoorError("", "NotCalled").name).toContain("NotCalled");

    // it sets the name to "NotFound"
    expect(new NoorError("", "NotFound").name).toContain("NotFound");

    // it sets the name to "NotCalled"
    expect(new NoorError("", "NotInitialized").name).toContain(
      "NotInitialized"
    );
  });
});
