import { describe, expect, it } from "vitest";
import channelCreator from "../../src/component/creators/channel-creator";
import ComponentCreator from "../../src/component/creators/component-creator";
import elementPlug from "../../src/plugs/element";
import channelPlug from "../../src/plugs/channel";
import { ComponentObjType } from "../../src/interfaces/component";
import { renderComponent } from "../../src/component/render/render-component";

// Channel Plug Tests

describe("Channel Plug Test", () => {
  // Channel plug is a function
  it("Channel Plug Is A Function", () => {
    // It is a function
    expect(channelPlug).toBeTypeOf("function");
  });

  // It returns provider/accessor methods
  it("Returned Provider/Accessor Methods & Errors", () => {
    // fake component object
    const this_test_obj = Object.create({
      ele: {
        element: document.createElement("div"), // => test element
        channel: {
          provider: {
            is: false,
            id: null,
          },
          accessors: [],
        },
      },
    });

    // it returns methods
    // accessor
    expect(channelPlug(this_test_obj).accessor).toBeTypeOf("function");
    // provider
    expect(channelPlug(this_test_obj).provider).toBeTypeOf("function");

    // Throw errors

    // throw error when component object wasn't provided or it's not valid
    // not provided
    expect(() => {
      //@ts-ignore
      channelPlug();
    }).toThrowError();
    // not valid
    expect(() => {
      channelPlug({} as any);
    }).toThrowError();

    // accessor/provider throw error
    // with invalid channel
    expect(() => {
      channelPlug(this_test_obj).accessor({} as any);
    }).toThrowError();
    // with invalid channel
    expect(() => {
      channelPlug(this_test_obj).provider({} as any);
    }).toThrowError();

    // access the same channel that was provided by component object
    expect(() => {
      // fake component object
      const test_obj = Object.create({
        ele: {
          id: "test_30",
          options: {},
          tag: "div",
          cycle: { init: [], mount: [], render: [] },
          states: {},
          children: [],
          channel: {
            provider: {
              is: false,
              id: null,
            },
            accessors: [],
          },
          states_changes: {},
        },
        methods: {},
        get: {},
        set: {},
      });

      // use the element plug
      elementPlug("div", test_obj);

      // create a channel
      const test_channel = channelCreator();
      // set the provider
      channelPlug(test_obj).provider(test_channel, {});
      // try access
      channelPlug(test_obj).accessor(test_channel);
    }).toThrowError();

    // try setting the initial data two times
    expect(() => {
      // fake component object
      const test_obj = Object.create({
        ele: {
          id: "test_64",
          options: {},
          tag: "div",
          cycle: { init: [], mount: [], render: [] },
          states: {},
          children: [],
          channel: {
            provider: {
              is: false,
              id: null,
            },
            accessors: [],
          },
          states_changes: {},
        },
        methods: {},
        get: {},
        set: {},
      });

      // use the element plug
      elementPlug("div", test_obj);

      // create a channel
      const test_channel = channelCreator();

      // set the provider
      channelPlug(test_obj)
        .provider(test_channel, { name: "" })
        .value({ name: "3" });
    }).toThrowError();
  });

  // Working functionality with forward/backward/peer accessing

  // Forward
  it("Working Functionality In Forward Accessing", () => {
    // create channel
    type dataType = {
      title: string;
      getCounter: () => number;
      setCounter: (n: number) => void;
    };
    const test_channel = channelCreator<dataType>();

    // child component
    function ComponentChild(this: ComponentObjType<any>) {
      elementPlug("h2", this);

      const { title, getCounter, setCounter } =
        channelPlug(this).accessor(test_channel);
      setCounter(getCounter() + 100);
      setCounter(getCounter() - 10);
      setCounter(getCounter() * 10);
      return () => title + getCounter();
    }

    // Parent component
    function ComponentParent(this: ComponentObjType<any>) {
      elementPlug("div", this);
      const [getCounter, setCounter] = this.state(0);

      channelPlug(this)
        .provider(test_channel)
        .value({
          title: "Hello",
          setCounter: (n) => setCounter(n),
          getCounter: getCounter,
        });

      return () => ComponentCreator(ComponentChild, null);
    }

    const ComponentParent_RenderObj = ComponentCreator(ComponentParent, null);

    // check the types fo the channel data
    // get counter
    expect(test_channel.getter()["getCounter"]).toBeTypeOf("function");
    // set counter
    expect(test_channel.getter()["setCounter"]).toBeTypeOf("function");
    // title
    expect(test_channel.getter()["title"]).toBeTypeOf("string");
    expect(test_channel.getter()["title"]).toBe("Hello");

    // check children view
    expect(ComponentParent_RenderObj.children![0].html).toBe("Hello900");

    // check the counter in the channel
    expect(test_channel.getter()["getCounter"]()).toBe(900);

    // update the counter and check it
    test_channel
      .getter()
      ["setCounter"](100 * test_channel.getter()["getCounter"]());

    // recheck the counter in the channel
    expect(test_channel.getter()["getCounter"]()).toBe(90000);
  });

  // Backward
  it("Working Functionality In Backward Accessing", () => {
    // create channel
    type dataType = {
      getCounter: () => number;
      setCounter: (n: number) => void;
    };
    const test_channel = channelCreator<dataType>();

    // child component
    function ComponentChild(this: ComponentObjType<any>) {
      elementPlug("h2", this);
      const [getCounter, setCounter] = this.state(0);

      channelPlug(this)
        .provider(test_channel)
        .value({
          setCounter: (n) => {
            setCounter(n);
            this.render();
          },
          getCounter: getCounter,
        });

      return () => getCounter().toString();
    }

    // Parent component
    function ComponentParent(this: ComponentObjType<any>) {
      elementPlug("div", this);
      const chan = channelPlug(this).accessor(test_channel);

      this.onMount(() => {
        chan.setCounter(chan.getCounter() + 100);
        chan.setCounter(chan.getCounter() - 10);
        chan.setCounter(chan.getCounter() * 10);
      });

      return () => [ComponentCreator(ComponentChild, null)];
    }

    const ComponentParent_RenderObj = ComponentCreator(ComponentParent, null);

    // render the component to run the lifecycle methods
    renderComponent(ComponentParent_RenderObj, document.body);

    // check the types fo the channel data
    // get counter
    expect(test_channel.getter()["getCounter"]).toBeTypeOf("function");
    // set counter
    expect(test_channel.getter()["setCounter"]).toBeTypeOf("function");

    // check the counter in the channel
    expect(test_channel.getter()["getCounter"]()).toBe(900);

    // update the counter and check it
    test_channel
      .getter()
      ["setCounter"](100 * test_channel.getter()["getCounter"]());

    // recheck the counter in the channel
    expect(test_channel.getter()["getCounter"]()).toBe(90000);
  });

  // Forward
  it("Working Functionality In Peer (Provider ins't parent/child) Accessing", () => {
    // create channel
    type dataType = {
      title: string;
      getCounter: () => number;
      setCounter: (n: number) => void;
    };
    const test_channel = channelCreator<dataType>();

    // child component
    function ComponentChild2(this: ComponentObjType<any>) {
      elementPlug("h2", this);

      const { title, getCounter, setCounter } =
        channelPlug(this).accessor(test_channel);
      setCounter(getCounter() + 100);
      setCounter(getCounter() - 10);
      setCounter(getCounter() * 10);
      return () => title + getCounter();
    }

    // Parent component
    function ComponentChild1(this: ComponentObjType<any>) {
      elementPlug("div", this);
      const [getCounter, setCounter] = this.state(0);

      channelPlug(this)
        .provider(test_channel)
        .value({
          title: "Child2_",
          setCounter: (n) => {
            setCounter(n);
          },
          getCounter: getCounter,
        });

      return () => "Child1_" + getCounter();
    }

    const ComponentChild1_Obj = ComponentCreator(ComponentChild1, null);
    const ComponentChild2_Obj = ComponentCreator(ComponentChild2, null);

    // check the types fo the channel data
    // get counter
    expect(test_channel.getter()["getCounter"]).toBeTypeOf("function");
    // set counter
    expect(test_channel.getter()["setCounter"]).toBeTypeOf("function");
    // title
    expect(test_channel.getter()["title"]).toBeTypeOf("string");

    // check children view2
    expect(ComponentChild1_Obj.html).toBe("Child1_0");
    expect(ComponentChild2_Obj.html).toBe("Child2_900");

    // check the counter in the channel
    expect(test_channel.getter()["getCounter"]()).toBe(900);

    // update the counter and check it
    test_channel
      .getter()
      ["setCounter"](100 * test_channel.getter()["getCounter"]());

    // recheck the counter in the channel
    expect(test_channel.getter()["getCounter"]()).toBe(90000);
  });
});
