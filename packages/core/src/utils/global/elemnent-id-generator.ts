import { nanoid } from "nanoid";

// Function to generate the element id

function elementIdGenerator(): string {
  return "ele_" + nanoid(10);
}

export { elementIdGenerator };
