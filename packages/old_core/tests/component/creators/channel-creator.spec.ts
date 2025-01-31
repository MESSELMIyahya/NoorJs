import { describe, expect, it } from "vitest";
import channelCreator from "../../../src/component/creators/channel-creator";

// channelCreator function test

describe("ChannelCreator Tests", () => {
  // It's a function
  it("It Is A Function", () => {
    // it is a function
    expect(channelCreator).toBeTypeOf("function");
  });

  // It Creates the channel and sets the Id and methods

  it("It Creates The Channel & Sets The Id And Methods", () => {
    // create a channel
    const testChannel = channelCreator();

    // It Generates The Id
    expect(testChannel.id && testChannel.id.startsWith("chan_")).toBe(true);

    // It sets getter & setter methods
    expect(testChannel.getter).toBeTypeOf("function");
    expect(testChannel.setter).toBeTypeOf("function");
  });

  // It handel the getting & setting channel functionality
  it("It Handles The Getting & Setting Channel Functionality", () => {
    // create a channel
    const testChannel = channelCreator();

    // Getter method returns the data (compar the empty channel data)
    expect(JSON.stringify(testChannel.getter())).equal(JSON.stringify({}));

    // setting some data
    testChannel.setter({ name: "Ali", age: 30 });

    // Setter method updates the data
    expect(testChannel.getter().name).toBe("Ali");
    expect(testChannel.getter().age).toBe(30);

    // remove/update some data
    testChannel.setter({ name: "Mohamed" });

    // Setter method updates/deletes the data
    expect(testChannel.getter().name).toBe("Mohamed");
    expect(testChannel.getter().age).toBeUndefined();
  });
});
