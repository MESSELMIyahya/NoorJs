import { describe, expect, it } from "vitest";
import * as LifeCycleMethods from "../../../src/component/lifecycle/component-lifecycle";

// Lifecycle Methods Runners tests

describe("Lifecycle Methods Runners Tests", () => {
  // The Lifecycle Methods are functions
  it("Lifecycle Methods Runners Are Functions", () => {
    // componentLifecycleInit
    expect(LifeCycleMethods.componentLifecycleInit).toBeTypeOf("function");
    // componentLifecycleMount
    expect(LifeCycleMethods.componentLifecycleMount).toBeTypeOf("function");
    // componentLifecycleRender
    expect(LifeCycleMethods.componentLifecycleRender).toBeTypeOf("function");
  });

  // Calls the methods
  it("Call the Lifecycle Methods", () => {
    // test methods
    let res = { init: false, mount: false, render: false };
    const onInit = [
      () => {
        res.init = true;
      },
    ];
    const onMount = [
      () => {
        res.mount = true;
      },
    ];
    const onRender = [
      () => {
        res.render = true;
      },
    ];

    // call the Init methods
    LifeCycleMethods.componentLifecycleInit(onInit);
    // test it it was called
    expect(res.init).toBe(true);

    // call the mount methods
    LifeCycleMethods.componentLifecycleMount(onMount);
    // test it it was called
    expect(res.mount).toBe(true);

    // call the render methods
    LifeCycleMethods.componentLifecycleRender(onRender);
    // test it it was called
    expect(res.render).toBe(true);
  });
});
