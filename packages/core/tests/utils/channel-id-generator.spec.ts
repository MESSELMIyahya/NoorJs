import { describe, expect, it } from "vitest";
import channelIdGenerator from "../../src/utils/channel-id-generator";

// elementIdGenerator function tests

describe("ChannelIdGenerator Tests", () => {
  it("It Is A Function And Returns String", () => {
    // it is a function
    expect(channelIdGenerator).toBeTypeOf("function");
    // it is returns a string
    expect(channelIdGenerator()).toBeTypeOf("string");
    // it returns id that starts with 'ele_'
    expect(channelIdGenerator()).toContain("chan_");
  });
});
