import { Component, ComponentCreator, element, FCRendered } from "@repo/core";

function App(this: Component): FCRendered {
  element("div", this);

  const [getCount, setCount, countRef] = this.state(0);

  this.onInit(() => {
    console.log("initialized");
  });

  this.onMount(() => {
    console.log("mounted");
  });

  this.onRender(() => {
    console.log("rendered");
  });

  // increment & decrement functions
  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  // update the span element when ever the count state gets changed
  this.onChange(() => {
    this.render({});
  }, [countRef]);

  return () => [
    ComponentCreator("span", {}, getCount() + ""),
    ComponentCreator("div", {}, [
      ComponentCreator("button", { onclick: increment }, "Increment"),
      ComponentCreator("button", { onclick: decrement }, "decrement"),
    ]),
  ];
}

export default App;
