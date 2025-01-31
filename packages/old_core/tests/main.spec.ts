import { describe, it, expect } from "vitest";
import {
  renderRoot,
  element,
  createRoot,
  ComponentCreator,
} from "../src/index";

// index.ts exports tests (to make sure they've been exported correctly)

describe("Main Exports Tests", () => {
  // Test exports
  it("Exports Correctly", () => {
    // test renderRoot function
    expect(renderRoot).toBeDefined();

    // test element function
    expect(element).toBeDefined();

    // test createRoot function
    expect(createRoot).toBeDefined();

    // test ComponentCreator function
    expect(ComponentCreator).toBeDefined();
  });
});
